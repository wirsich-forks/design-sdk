import type { ReflectEllipseNode } from "./ellipse";
import type { ReflectFrameNode } from "./frame";
import type { ReflectGroupNode } from "./group";
import type { ReflectLineNode } from "./line";
import type { ReflectRectangleNode } from "./rectangle";
import type { ReflectTextNode } from "./text";
import type { ReflectVectorNode } from ".";
import type { ReflectBooleanOperationNode } from "./boolean-operation";

type ReflectSceneNode =
  | ReflectFrameNode
  | ReflectGroupNode
  | ReflectRectangleNode
  | ReflectEllipseNode
  | ReflectVectorNode
  | ReflectTextNode
  | ReflectLineNode
  | ReflectBooleanOperationNode;
// TODO
// | StarNode
// | PolygonNode;

export type { ReflectSceneNode };
