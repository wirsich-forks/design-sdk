import { SceneNode } from "../../figma/types/v1";
import { Node } from "../types";
import { mapFigmaRemoteFrameToFigma } from "./frame.mapper";
import { mapFigmaRemoteRectangleToFigma } from "./rectangle.mapper";
import { mapFigmaRemoteTextToFigma } from "./text.mapper";
export function mapFigmaRemoteToFigma(remNode: Node): SceneNode {
  let preConvertedChildren: SceneNode[];
  if ("children" in remNode) {
    preConvertedChildren = remNode.children.map((c) =>
      mapFigmaRemoteToFigma(c)
    );
  }

  let nonchildreninstance: SceneNode;
  switch (remNode.type) {
    case "TEXT":
      nonchildreninstance = mapFigmaRemoteTextToFigma(remNode);
      break;

    case "RECTANGLE":
      nonchildreninstance = mapFigmaRemoteRectangleToFigma(remNode);
      break;

    // Frame conversion is not working as expected. disabling.
    // case "FRAME":
    //   nonchildreninstance = mapFigmaRemoteFrameToFigma(remNode);
    //   break;

    default:
      console.warn(`type "${remNode.type}" not handled`);
      nonchildreninstance = (remNode as any) as SceneNode;
      break;
  }

  if ("children" in nonchildreninstance && preConvertedChildren) {
    // @ts-ignore - ignoring readonly
    nonchildreninstance.children = preConvertedChildren;
  }
  return nonchildreninstance;
}
