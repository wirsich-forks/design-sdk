# `Figma-Url` _(`@design-sdk/figma-url`)_

> figma url reader / parser

## Installation

```sh
yarn add @design-sdk/figma-url

# or with npm
npm i @design-sdk/figma-url
```

## Usage

**url analysis**

```ts
import { analyze, FigmaUrlType } from "@design-sdk/figma-url";

test("analyze url - valid embedding url", () => {
  const _url =
    "https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/design/Y0Gh77AqBoHH7dG1GtK3xF/?node-id=264%3A49";
  expect(analyze(_url)).toBe(FigmaUrlType.embed);
});
```

**supported url patterns**

This package supports all Figma URL patterns:

- `/file/` - Legacy pattern (backward compatible)
- `/design/` - Current standard for design files (replaces `/file/`)
- `/board/` - FigJam boards
- `/slides/` - Figma Slides
- `/site/` - Figma Sites

All patterns are supported for parsing and analysis. When building new URLs, the `/design/` pattern is used.

**embed link builder**

```ts
import { embed } from "@design-sdk/figma-url";

test("build embed url", () => {
  const _url =
    "https://www.figma.com/design/Y0Gh77AqBoHH7dG1GtK3xF/?node-id=264%3A49";
  expect(embed(_url)).toBe(
    "https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/design/Y0Gh77AqBoHH7dG1GtK3xF/?node-id=264%3A49"
  );
});

test("build embed url with file & node id", () => {
  expect(embed({ fileid: "Y0Gh77AqBoHH7dG1GtK3xF", nodeid: "264%3A49" })).toBe(
    "https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/design/Y0Gh77AqBoHH7dG1GtK3xF/?node-id=264%3A49"
  );
});
```

**parse**

```ts
import { parseFileAndNodeId } from "@design-sdk/figma-url";

// parse fileid & nodeid from url (supports all URL patterns)
parseFileAndNodeId(
  "https://www.figma.com/design/Y0Gh77AqBoHH7dG1GtK3xF/?node-id=264%3A49"
);

// => Y0Gh77AqBoHH7dG1GtK3xF, 264%3A49

// Also works with legacy /file/ URLs and other patterns:
parseFileAndNodeId(
  "https://www.figma.com/file/Y0Gh77AqBoHH7dG1GtK3xF/?node-id=264%3A49"
); // backward compatible
parseFileAndNodeId(
  "https://www.figma.com/board/Y0Gh77AqBoHH7dG1GtK3xF/?node-id=264%3A49"
); // FigJam
parseFileAndNodeId(
  "https://www.figma.com/slides/Y0Gh77AqBoHH7dG1GtK3xF/?node-id=264%3A49"
); // Figma Slides
parseFileAndNodeId(
  "https://www.figma.com/site/Y0Gh77AqBoHH7dG1GtK3xF/?node-id=264%3A49"
); // Figma Sites
```

## `node-id` format

This package supports `node-id` format with `:`, `%3A` and `-`.

## Backward Compatibility

This package maintains full backward compatibility with the legacy `/file/` URL pattern. All functions will correctly parse and handle both old and new URL patterns.

## LICENSE - MIT by [Grida.co](https://grida.co)

## References

- figma embed url - https://www.figma.com/developers/embed
