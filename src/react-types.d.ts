// React types for CDN usage with JSX support
declare const React: {
  createElement: (type: any, props?: any, ...children: any[]) => any;
  useState: <T>(initialState: T) => [T, (value: T | ((prev: T) => T)) => void];
  FC: React.FunctionComponent<any>;
  FunctionComponent: <P = {}>(props: P) => JSX.Element | null;
};

declare const ReactDOM: {
  render: (element: any, container: HTMLElement) => void;
  createRoot?: (container: HTMLElement) => {
    render: (element: any) => void;
  };
};

// Module declaration for import support
declare module 'react' {
  export = React;
}

declare module 'react-dom' {
  export = ReactDOM;
}

// JSX namespace for TypeScript
declare namespace JSX {
  interface Element {
    type: any;
    props: any;
    key: any;
  }
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Global React namespace
declare namespace React {
  interface FunctionComponent<P = {}> {
    (props: P): JSX.Element | null;
  }
  
  type FC<P = {}> = FunctionComponent<P>;
}