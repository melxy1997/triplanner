'use client';

import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { Tool } from '@/app/page';

interface CanvasProps {
  activeTool: Tool;
}

const Canvas: React.FC<CanvasProps> = ({ activeTool }) => {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const canvasRef = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasEl.current);
    canvasRef.current = canvas;

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      const cardData = JSON.parse(e.dataTransfer?.getData('text/plain') || '{}');

      fabric.Image.fromURL(cardData.imageUrl, (img) => {
        const text = new fabric.Text(cardData.title, {
          fontSize: 20,
          originX: 'center',
          top: img.height,
        });

        const group = new fabric.Group([img, text], {
          left: canvas.getPointer(e).x,
          top: canvas.getPointer(e).y,
        });

        canvas.add(group);
      }, { crossOrigin: 'anonymous' });
    };

    const canvasContainer = canvasEl.current?.parentElement;
    canvasContainer?.addEventListener('dragover', handleDragOver);
    canvasContainer?.addEventListener('drop', handleDrop);

    return () => {
      canvasContainer?.removeEventListener('dragover', handleDragOver);
      canvasContainer?.removeEventListener('drop', handleDrop);
      canvas.dispose();
      canvasRef.current = null;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (activeTool === 'pan') {
      canvas.selection = false;
      canvas.defaultCursor = 'grab';
      canvas.on('mouse:down', (o) => {
        if (o.e.altKey || canvas.defaultCursor === 'grab') {
          canvas.setCursor('grabbing');
          const evt = o.e as MouseEvent;
          canvas.isDragging = true;
          canvas.lastPosX = evt.clientX;
          canvas.lastPosY = evt.clientY;
        }
      });

      canvas.on('mouse:move', (o) => {
        if (canvas.isDragging) {
          canvas.setCursor('grabbing');
          const e = o.e as MouseEvent;
          const vpt = canvas.viewportTransform;
          if (vpt) {
            vpt[4] += e.clientX - canvas.lastPosX;
            vpt[5] += e.clientY - canvas.lastPosY;
            canvas.requestRenderAll();
            canvas.lastPosX = e.clientX;
            canvas.lastPosY = e.clientY;
          }
        }
      });

      canvas.on('mouse:up', () => {
        if (canvas.isDragging) {
          canvas.setCursor('grab');
          canvas.isDragging = false;
        }
      });
    } else {
      // Re-enable selection for other tools
      canvas.selection = true;
      canvas.defaultCursor = 'default';
      // Turn off panning listeners
      canvas.off('mouse:down');
      canvas.off('mouse:move');
      canvas.off('mouse:up');
      canvas.isDragging = false;
    }
  }, [activeTool]);

  return <canvas ref={canvasEl} width="1920" height="1080" />;
};

export default Canvas;
