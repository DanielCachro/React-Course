import ReactReconciler from 'react-reconciler';
import * as React from 'react';
import { MountInfo } from '@million/shared/types/raw-api/runtime';

declare class FiberProvider extends React.Component<{
    children?: React.ReactNode;
} & Parameters<typeof init>[0]> {
    constructor(props: any);
    private _reactInternals;
    render(): string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.FunctionComponentElement<React.ProviderProps<ReactReconciler.Fiber>> | null | undefined;
}

declare let MillionLintProvider: typeof FiberProvider;
declare const enum CaptureKind {
    ClassSetState = 0,
    Deps = 1,
    Props = 2,
    Value = 4,
    State = 8,
    JSX = 16,// input: compiler passes this into captureJSX
    JSXMount = 32,// output: these captures are product = "mount"
    JSXUpdate = 64,// output = "update" | "unmount"
    Function = 128,
    Error = 256,
    Baseline = 512,
    Hooks = 1024,
    Note = 2048
}
declare let $$: (value: any, kind: CaptureKind, key: string, loc: number | null, secondaryLoc: number | null, locs: Array<number> | null, index: number | null, mountInfo: MountInfo | null) => any;
declare let useCapture: (value: any, key?: string, loc?: number, index?: number, mountInfo?: MountInfo) => any;
declare let useCount: (message: string, key?: string, loc?: number, index?: number, mountInfo?: MountInfo) => any;
declare let reset: () => void;
declare let registerMetadata: (key: string, size: number, isComponent: boolean, _DEV: {
    filename: string;
    componentName: string;
} | null) => void;
declare let init: (options?: {
    url?: string;
    buildId?: string;
    commitHash?: string;
    apiKey?: string;
    sessionId?: string;
}) => void;

export { $$, MillionLintProvider, init, registerMetadata, reset, useCapture, useCount };
