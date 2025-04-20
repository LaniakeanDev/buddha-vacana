type BVSVGElement = React.FC<React.SVGProps<SVGSVGElement> & { alt?: string }>;

declare module '*.svg' {
  import React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
