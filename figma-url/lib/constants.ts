/**
 * e.g. full url should look like -
 * https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/design/HSozKEVWhh8saZa2vr1Nxd?node-id=111%3A0
 *
 * ref: https://www.figma.com/developers/embed
 */
export const _FIGMA_EMBED_URL_PREFIX = "https://www.figma.com/embed";

/**
 * Legacy file URL prefix (for backward compatibility)
 * e.g. full url should look like -
 * https://www.figma.com/file/HSozKEVWhh8saZa2vr1Nxd?node-id=111%3A0
 */
export const _FIGMA_FILE_URL_PREFIX = "https://www.figma.com/file";

/**
 * Design file URL prefix (current standard, replaces /file/)
 * e.g. full url should look like -
 * https://www.figma.com/design/HSozKEVWhh8saZa2vr1Nxd?node-id=111%3A0
 */
export const _FIGMA_DESIGN_URL_PREFIX = "https://www.figma.com/design";

/**
 * FigJam board URL prefix
 * e.g. full url should look like -
 * https://www.figma.com/board/HSozKEVWhh8saZa2vr1Nxd?node-id=111%3A0
 */
export const _FIGMA_BOARD_URL_PREFIX = "https://www.figma.com/board";

/**
 * Figma Slides URL prefix
 * e.g. full url should look like -
 * https://www.figma.com/slides/HSozKEVWhh8saZa2vr1Nxd?node-id=111%3A0
 */
export const _FIGMA_SLIDES_URL_PREFIX = "https://www.figma.com/slides";

/**
 * Figma Site URL prefix
 * e.g. full url should look like -
 * https://www.figma.com/site/HSozKEVWhh8saZa2vr1Nxd?node-id=111%3A0
 */
export const _FIGMA_SITE_URL_PREFIX = "https://www.figma.com/site";

/**
 * param key for node id specification.
 *
 * e.g. - `https://www.figma.com/file/ABC/?node-id=1234` `(node-id = 1234)`
 */
export const _PARAM_NODE_ID = "node-id";

// ======================================================================================================
// escape with __ for "super-internal" usage
/**
 * file id of Grida design - https://www.figma.com/file/Y0Gh77AqBoHH7dG1GtK3xF/
 */
export const __FIGMA_DEMO_DEFAULT_FILE_ID = "Y0Gh77AqBoHH7dG1GtK3xF";
export const __FIGMA_DEMO_DEFAULT_FILE_URL =
  "https://www.figma.com/file/Y0Gh77AqBoHH7dG1GtK3xF/";
export const __FIGMA_DEMO_DEFAULT_FILE_NODE_URL =
  "https://www.figma.com/file/Y0Gh77AqBoHH7dG1GtK3xF/?node-id=264%3A49";
// ======================================================================================================
