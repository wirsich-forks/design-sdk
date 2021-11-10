import { TextShadowManifest } from "./../../reflect-core/packages/reflect-core/lib/text-shadow/text-shadow.manifest";
import {
  DimensionLength,
  FontWeight,
  TextAlign,
  TextAlignVertical,
  TextDecoration,
  TextManifest,
  TextStyleManifest,
} from "@reflect-ui/core";
import { ReflectSceneNodeType } from "./node-type";
import { ReflectDefaultShapeMixin } from "./mixins";

// region FIXME - migrate this
import { getTextStyleById } from "@design-sdk/figma";
import { TextAutoResize } from "@design-sdk/figma-types";
import {
  FontName,
  TextCase,
  LetterSpacing,
  LineHeight,
} from "@design-sdk/figma-types";
import { extractTextStyleFromTextNode } from "@design-sdk/figma-node-conversion";
import { convertFontStyleNameToFontWeightReflect } from "@design-sdk/core/converters";
import { TextOverflow } from "@reflect-ui/core/lib/text-overflow";
// endregion

export class ReflectTextNode
  extends ReflectDefaultShapeMixin
  implements Omit<TextManifest, "style"> {
  readonly type: ReflectSceneNodeType.text = ReflectSceneNodeType.text;

  /**
   * text content; text characters
   */
  data: string;

  // omitted - style: TextStyleManifest; (FIXME: make text style as unified property)
  overflow: TextOverflow;
  maxLines: number;

  textAutoResize: TextAutoResize;

  textAlign: TextAlign;
  textAlignVertical: TextAlignVertical;

  paragraphIndent: number;
  paragraphSpacing: number;

  fontSize: number | undefined;
  fontName: FontName | undefined;
  textStyleId: string | undefined;
  textCase: TextCase | undefined;
  textDecoration?: TextDecoration;

  letterSpacing: LetterSpacing;
  lineHeight: DimensionLength;

  textShadow: TextShadowManifest[];

  get hasTextStyle(): boolean {
    if (this.textStyleId !== "") {
      return true;
    }
    return false;
  }

  get textStyle(): TextStyleManifest {
    try {
      return getTextStyleById(this.textStyleId as string);
    } catch (e) {
      // console.error(`error occcured while getting text style by id`, e)
      return extractTextStyleFromTextNode(this);
    }
  }

  get fontFamily(): string {
    return this.fontName.family;
  }

  get fontWeight(): FontWeight {
    try {
      return convertFontStyleNameToFontWeightReflect(this.fontName.style);
    } catch (_) {
      // fallback.
      return FontWeight.normal;
    }
  }
}