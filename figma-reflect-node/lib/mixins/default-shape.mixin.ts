import { ReflectConstraintMixin } from "./constraint.mixin";
import type { BorderRadiusManifest } from "@reflect-ui/core";
import type { IReflectDefaultShapeMixin } from "../interfaces/default-shape-mixin";
import type { BlendMode } from "@reflect-ui/cg";

// FIXME - migrate this
import type {
  Paint,
  Effect,
  StrokeCap,
  StrokeJoin,
  FigmaLayoutAlign,
  VectorPaths,
} from "@design-sdk/figma-types";
import { FigmaLayoutGrow } from "@design-sdk/figma-types";

export class ReflectDefaultShapeMixin
  extends ReflectConstraintMixin
  implements IReflectDefaultShapeMixin
{
  declare layoutGrow: FigmaLayoutGrow;
  declare layoutAlign: FigmaLayoutAlign;
  declare opacity: number;
  declare blendMode: "PASS_THROUGH" | BlendMode;
  declare isMask: boolean;
  declare effects: ReadonlyArray<Effect>;
  declare effectStyleId: string;
  declare visible: boolean;
  declare radius: number;

  declare fills: ReadonlyArray<Paint> | undefined;
  declare strokes: ReadonlyArray<Paint>;
  strokeWeight: number;
  strokeMiterLimit: number;
  strokeAlign: "CENTER" | "INSIDE" | "OUTSIDE";
  strokeCap: StrokeCap | undefined;
  strokeJoin: StrokeJoin | undefined;
  strokeGeometry: VectorPaths;
  dashPattern: ReadonlyArray<number>;
  fillStyleId: string | undefined;
  strokeStyleId: string;

  cornerRadius: BorderRadiusManifest;
  declare cornerSmoothing: number;

  declare x: number;
  declare y: number;
  declare rotation: number;
  declare width: number;
  declare height: number;
}
