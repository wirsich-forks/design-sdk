import { ReflectChildrenMixin } from "./mixins/children.mixin";
import type { IReflectBlendMixin, IReflectLayoutMixin } from "./mixins";
import type { ReflectSceneNode } from "./node-type-alias";
import type { BlendMode } from "@reflect-ui/cg";
import type {
  // FIXME: - migrate this
  Effect,
  FigmaLayoutGrow,
  FigmaLayoutAlign,
} from "@design-sdk/figma-types";
import { ReflectSceneNodeType } from "./node-type";
import { types } from "@reflect-ui/uiutils";

//#region group node
export class ReflectGroupNode
  extends ReflectChildrenMixin
  implements ReflectChildrenMixin, IReflectBlendMixin, IReflectLayoutMixin
{
  readonly type: ReflectSceneNodeType.group = ReflectSceneNodeType.group;

  declare opacity: number;
  declare blendMode: "PASS_THROUGH" | BlendMode;
  declare isMask: boolean;
  declare effects: readonly Effect[];
  declare effectStyleId: string;
  declare visible: boolean;
  declare radius: number;
  declare absoluteTransform: types.Transform;
  declare x: number;
  declare y: number;
  declare rotation: number;
  declare width: number;
  declare height: number;
  declare layoutAlign: FigmaLayoutAlign;
  declare layoutGrow: FigmaLayoutGrow;

  declare children: Array<ReflectSceneNode>;
}

//#endregion
