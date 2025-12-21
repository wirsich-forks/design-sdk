import type { BorderRadiusManifest } from "@reflect-ui/core";
import type {
  Axis,
  CrossAxisAlignment,
  EdgeInsets,
  MainAxisAlignment,
} from "@reflect-ui/core";
import type {
  IReflectGeometryMixin,
  IReflectRectangleCornerMixin,
  IReflectBlendMixin,
  IReflectLayoutMixin,
} from "./mixins";

// FIXME - migrate this to reflect core
import type {
  LayoutGrid,
  Guide,
  Constraints,
  Paint,
  StrokeJoin,
  StrokeCap,
  Effect,
  Transform,
  FigmaLayoutAlign,
  FigmaLayoutGrow,
  FigmaPrimaryAxisSizingMode,
  FigmaCounterAxisSizingMode,
  VectorPaths,
} from "@design-sdk/figma-types";
import type { ReflectSceneNode } from "./node-type-alias";
import type { BlendMode } from "@reflect-ui/cg";
import { ReflectChildrenMixin } from "./mixins/children.mixin";
import { ReflectSceneNodeType } from "./node-type";
import { checkIfAutoLayout } from "@design-sdk/figma-utils";

//#region frame
interface IReflectFrameMixin {
  /**
   * figma: this property is only available when layoutMode != "NONE"
   */
  itemSpacing: number;

  layoutGrids: ReadonlyArray<LayoutGrid>;
  gridStyleId: string;
  clipsContent: boolean;
  guides: ReadonlyArray<Guide>;
}

export class ReflectFrameNode
  extends ReflectChildrenMixin
  implements
    IReflectFrameMixin,
    IReflectGeometryMixin,
    IReflectRectangleCornerMixin,
    IReflectBlendMixin,
    IReflectLayoutMixin
{
  readonly type: ReflectSceneNodeType.frame = ReflectSceneNodeType.frame;

  declare absoluteTransform: Transform;

  declare constraints: Constraints;

  // frame mixin
  declare layoutGrow: FigmaLayoutGrow;
  declare mainAxisAlignment: MainAxisAlignment;
  declare crossAxisAlignment: CrossAxisAlignment;
  declare layoutMode?: Axis | undefined;
  declare primaryAxisSizingMode: FigmaPrimaryAxisSizingMode;
  declare counterAxisSizingMode: FigmaCounterAxisSizingMode;
  itemSpacing: number;
  declare padding: EdgeInsets;
  layoutGrids: ReadonlyArray<LayoutGrid>;
  gridStyleId: string;
  clipsContent: boolean;
  guides: ReadonlyArray<Guide>;

  // children mixin
  declare children: Array<ReflectSceneNode>;
  declare isRelative?: boolean;

  // geometry mixin
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

  // corner mixin
  cornerRadius: BorderRadiusManifest;
  declare cornerSmoothing: number;

  // rectangle corner mixin
  topLeftRadius: number;
  topRightRadius: number;
  bottomLeftRadius: number;
  bottomRightRadius: number;

  // blend mixin
  declare opacity: number;
  declare blendMode: "PASS_THROUGH" | BlendMode;
  declare isMask: boolean;
  declare effects: ReadonlyArray<Effect>;
  declare effectStyleId: string;
  declare visible: boolean;
  declare radius: number;

  // layout mixin
  declare x: number;
  declare y: number;
  declare rotation: number; // In degrees
  declare width: number;
  declare height: number;
  declare layoutAlign: FigmaLayoutAlign;

  get isAutoLayout(): boolean {
    return checkIfAutoLayout(this);
  }
}
//#endregion
