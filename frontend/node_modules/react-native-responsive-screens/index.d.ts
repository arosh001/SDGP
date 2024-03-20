declare module "react-native-responsive-screens" {
  import { Component } from "react";

  export function widthToDP(widthPercent: string | number): number;
  export function heightToDP(heightPercent: string | number): number;
  export function widthToFonts(widthPercent: string | number): number;
  export function heightToFonts(
    heightPercent: string | number
  ): number;
  export function useOrientationChange(
    screenClassComponent: Component<any, any>
  ): void;
  export function removeOrientationListener(): void;
}
