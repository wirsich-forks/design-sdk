import { parseFileAndNodeId, parseFileId } from "../lib/parse-url";
import {
  __FIGMA_DEMO_DEFAULT_FILE_ID,
  __FIGMA_DEMO_DEFAULT_FILE_URL,
  __FIGMA_DEMO_DEFAULT_FILE_NODE_URL,
} from "../lib";

test("parse fileid from url", () => {
  expect(parseFileId(__FIGMA_DEMO_DEFAULT_FILE_URL)).toBe(
    __FIGMA_DEMO_DEFAULT_FILE_ID
  );
});

test("parse nodeid and fileid from url v1 (old figma url via copy link / plain)", () => {
  const url =
    "https://www.figma.com/file/Gaznaw1QHppxvs9UkqNOb0/grida.co?node-id=5683:31451&t=ttMsIZRdkBv78VUQ-0";
  expect(parseFileAndNodeId(url)).toEqual({
    file: "Gaznaw1QHppxvs9UkqNOb0",
    node: "5683:31451",
    url,
  });
});

test("parse nodeid and fileid from url v1 (old figma url via copy link / url encoded)", () => {
  const url =
    "https://www.figma.com/file/Gaznaw1QHppxvs9UkqNOb0/grida.co?node-id=5683%3A31451&t=ttMsIZRdkBv78VUQ-0";
  expect(parseFileAndNodeId(url)).toEqual({
    file: "Gaznaw1QHppxvs9UkqNOb0",
    node: "5683:31451",
    url,
  });
});

test("parse nodeid and fileid from url v2 (updated figma url via copy link)", () => {
  const url =
    "https://www.figma.com/file/Gaznaw1QHppxvs9UkqNOb0/grida.co?node-id=5683-31451&t=ttMsIZRdkBv78VUQ-0";
  expect(parseFileAndNodeId(url)).toEqual({
    file: "Gaznaw1QHppxvs9UkqNOb0",
    node: "5683:31451",
    url,
  });
});

test("parse fileid from design URL (new pattern)", () => {
  const url = "https://www.figma.com/design/Y0Gh77AqBoHH7dG1GtK3xF/";
  expect(parseFileId(url)).toBe("Y0Gh77AqBoHH7dG1GtK3xF");
});

test("parse fileid from board URL (FigJam)", () => {
  const url = "https://www.figma.com/board/Y0Gh77AqBoHH7dG1GtK3xF/";
  expect(parseFileId(url)).toBe("Y0Gh77AqBoHH7dG1GtK3xF");
});

test("parse fileid from slides URL (Figma Slides)", () => {
  const url = "https://www.figma.com/slides/Y0Gh77AqBoHH7dG1GtK3xF/";
  expect(parseFileId(url)).toBe("Y0Gh77AqBoHH7dG1GtK3xF");
});

test("parse fileid from site URL (Figma Site)", () => {
  const url = "https://www.figma.com/site/Y0Gh77AqBoHH7dG1GtK3xF/";
  expect(parseFileId(url)).toBe("Y0Gh77AqBoHH7dG1GtK3xF");
});

test("parse nodeid and fileid from design URL", () => {
  const url =
    "https://www.figma.com/design/Gaznaw1QHppxvs9UkqNOb0/grida.co?node-id=5683:31451&t=ttMsIZRdkBv78VUQ-0";
  expect(parseFileAndNodeId(url)).toEqual({
    file: "Gaznaw1QHppxvs9UkqNOb0",
    node: "5683:31451",
    url,
  });
});

test("parse nodeid and fileid from board URL", () => {
  const url =
    "https://www.figma.com/board/Gaznaw1QHppxvs9UkqNOb0/grida.co?node-id=5683%3A31451&t=ttMsIZRdkBv78VUQ-0";
  expect(parseFileAndNodeId(url)).toEqual({
    file: "Gaznaw1QHppxvs9UkqNOb0",
    node: "5683:31451",
    url,
  });
});

test("parse nodeid and fileid from slides URL", () => {
  const url =
    "https://www.figma.com/slides/Gaznaw1QHppxvs9UkqNOb0/grida.co?node-id=5683-31451&t=ttMsIZRdkBv78VUQ-0";
  expect(parseFileAndNodeId(url)).toEqual({
    file: "Gaznaw1QHppxvs9UkqNOb0",
    node: "5683:31451",
    url,
  });
});

test("parse nodeid and fileid from site URL", () => {
  const url =
    "https://www.figma.com/site/Gaznaw1QHppxvs9UkqNOb0/grida.co?node-id=5683:31451";
  expect(parseFileAndNodeId(url)).toEqual({
    file: "Gaznaw1QHppxvs9UkqNOb0",
    node: "5683:31451",
    url,
  });
});
