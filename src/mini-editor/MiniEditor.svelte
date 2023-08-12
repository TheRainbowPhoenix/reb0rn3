<script>
  import Checkbox from "./components/form/Checkbox.svelte";
  import HtmlEditor from "./components/form/HTMLEditor.svelte";
  import ItemContainer from "./components/ItemContainer.svelte";
  import Select from "./components/form/Select.svelte";
  import TextArea from "./components/form/TextArea.svelte";
  import TextInput from "./components/form/TextInput.svelte";
  import Popout from "./components/editor/Popout.svelte";
  import Overview from "./components/bookshelf/Overview.svelte";
  import UrlInput from "./components/form/URLInput.svelte";

  export let data = {};
  /* data.description = {
    "@id": "description",
    value: "FIND_MEEE",
    "@keys": ["value"],
    "@flat": true,
    "@initialValue": { value: "FIND_MEEE" },
  } */
  // TextArea.t = {value: 'FIND_MEEE', label: 'Description', placeholder: ''}

  const textProps = { value: "title", label: "Title", placeholder: "" };

  const textAreaProps = {
    value: "FIND_MEEE",
    label: "Description",
    placeholder: "",
  };

  const selectProps = {
    value: "Contact",
    label: "Call to Action",
    placeholder: "",
    allowEmpty: true,
    selected: {
      text: "Contact",
      icon: "mdi:Contact",
      imageAlt: "Preview image for Contact",
      preview: {
        text: "No preview available",
        imageAlt: "Preview image for Contact",
      },
      value: "Contact",
    },
    options: [
      {
        text: "Blog",
        icon: "mdi:Blog",
        imageAlt: "Preview image for Blog",
        preview: {
          text: "No preview available",
          imageAlt: "Preview image for Blog",
        },
        value: "Blog",
      },
      {
        text: "Contact",
        icon: "mdi:Contact",
        imageAlt: "Preview image for Contact",
        preview: {
          text: "No preview available",
          imageAlt: "Preview image for Contact",
        },
        value: "Contact",
      },
    ],
  };

  // ,"large_header":{"@id":"large_header","value":true,"@keys":["value"],"@flat":true,"@initialValue":{"value":true}},
  const checkboxProps = { value: true, label: "Large Header", placeholder: "" };

  const urlInputProps = { value: "/signup", label: "Link", placeholder: "" };

  const htmlProps = {
    value: {
      content:
        '<p>This is the <em>Justice</em> template from <a href="https://cloudcannon.com/">CloudCannon</a>. Justice is strong foundation for the web presence of a law firm or business. It’s filled with fictitious example content to get you started.</p><p>Justice Law is professional representation. Practicing for over 50 years, our team have the knowledge and skills to get you results.</p>',
    },
    label: "Content HTML",
    placeholder: "",
  };
</script>

<div class="awesome-editor">
  <h1>TODO</h1>
  <p
    style="max-height: 100px; overflow:auto; border: 2px solid #ccc; border-radius: 8px"
  >
    {JSON.stringify(data)}
  </p>

  <div class="editor-wrapper">
    <div class="editor-wrapper-view">
      <div class="file-preview yaml-sidebar-open">
        <div class="sidebar-wrapper">
          <!-- TODO resize -->
          <div class="sidebar-content">
            <div class="split-data-view">
              <div class="split-data-view__editor js-editor">
                <div class="yaml-editor">
                  <div class="yaml-depth-slider js-object-views">
                    <div class="yaml-depth-wrapper yaml-depth-wrapper-0">
                      <div class="yaml-object">
                        <div class="yaml-child-view-container">
                          <div class="js-child-views">
                            <ItemContainer>
                              <TextInput {...textProps} />
                            </ItemContainer>

                            <ItemContainer>
                              <TextArea {...textAreaProps} />
                            </ItemContainer>

                            <ItemContainer>
                              <Select {...selectProps} />
                            </ItemContainer>

                            <ItemContainer>
                              <Checkbox {...checkboxProps} />
                            </ItemContainer>

                            <ItemContainer>
                              <HtmlEditor {...htmlProps} />
                            </ItemContainer>

                            <ItemContainer>
                              <UrlInput {...urlInputProps} />
                            </ItemContainer>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="editor-ui">
          <div class="visual-editor">
            <!-- TODO-->
            <Overview />
          </div>
        </div>
      </div>
    </div>
    <div class="popout-container">
      <Popout
        title={"Editor"}
        popout_uuid={"popout-f22f85e9-36bf-41c1-aa56-269f44a2c153"}
      >
        <div class="yaml-editor">
          <div class="yaml-depth-slider__before" />
          <div
            class="yaml-depth-slider js-object-views"
            style="transform: translateX(-0%);"
          >
            <div class="yaml-depth-wrapper yaml-depth-wrapper-0">
              <div class="yaml-object">
                <div class="yaml-child-view-container">
                  <div class="js-child-views">
                    <ItemContainer>
                      <TextInput {...textProps} />
                    </ItemContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Popout>
    </div>
  </div>
</div>

<style>
  :global(:root) {
    --cf: var(
      --customFont,
      --custom-font,
      Chakra Petch,
      "Chakra Petch Regular",
      Whitney,
      Whitney Book,
      Helvetica Neue,
      Helvetica,
      Arial,
      sans-serif
    );
    --cbcf: var(
      --codeBlocksCustomFont,
      --codeblocks-custom-font,
      Consolas,
      Andale Mono WT,
      Andale Mono,
      Lucida Console,
      Lucida Sans Typewriter,
      DejaVu Sans Mono,
      Bitstream Vera Sans Mono,
      Liberation Mono,
      Nimbus Mono L,
      Monaco,
      Courier New,
      Courier,
      monospace
    );
    --font-primary: Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif;
    --font-display: var(--cf);
    --font-code: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console",
      "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
      "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier,
      monospace;
    --font-headline: Ginto Nord, Ginto, "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    --font-korean: Whitney, "Apple SD Gothic Neo", "NanumBarunGothic",
      "ë§‘ì€ ê³ ë”•", "Malgun Gothic", Gulim, êµ´ë¦¼, Dotum, ë‹ì›€,
      "Helvetica Neue", Helvetica, Arial, sans-serif;
    --font-japanese: Whitney, Hiragino Sans, "ãƒ’ãƒ©ã‚®ãƒŽè§’ã‚´ ProN W3",
      "Hiragino Kaku Gothic ProN", "ãƒ¡ã‚¤ãƒªã‚ª", Meiryo, Osaka, "MS PGothic",
      "Helvetica Neue", Helvetica, Arial, sans-serif;
    --font-chinese-simplified: Whitney, "Microsoft YaHei New", å¾®è½¯é›…é»‘,
      "Microsoft Yahei", "Microsoft JhengHei", å®‹ä½“, SimSun, "Helvetica Neue",
      Helvetica, Arial, sans-serif;
    --font-chinese-traditional: Whitney, "Microsoft JhengHei", å¾®è»Ÿæ­£é»‘é«”,
      "Microsoft JhengHei UI", "Microsoft YaHei", å¾®è»Ÿé›…é»‘, å®‹ä½“, SimSun,
      "Helvetica Neue", Helvetica, Arial, sans-serif;

    --color-brand: #034ad8;
    --editor-sidebar-width: min(80%, 380px);
    --editor-resize-overlay-width: 380px;

    --media-list-item-height: 52px;

    --card-icon-size: 48px;
    --card-icon-padding: 0;
    --card-icon-border-radius: var(--border-radius-small);

    --grid-size: 4px;
    --border-radius: 8px;
    --border-radius-small: calc(var(--border-radius) / 2);
    --border-radius-inner: 6px;
    --border-width: 2px;
    --border-width-negative: calc(var(--border-width) * -1);
    --box-shadow-width-clickable-focus: calc(var(--grid-size) * 2);
    --box-shadow-clickable-focus: 0 0 var(--box-shadow-width-clickable-focus)
      #cfcfcf;
    --box-shadow-paper: 0 0 40px rgb(51 51 51 / 10%);
    --gap: calc(var(--grid-size) * 5);
    --gap-negative: calc(var(--gap) * -1);
    --gap-double: calc(var(--gap) * 2);
    --gap-half: calc(var(--gap) * 0.5);
    --transition-duration: 0.15s;
    --font-family: "TT Norms Pro", helvetica, arial, sans-serif;
    --font-family-monospace: "Inconsolata", consolas, monaco, monospace;
    --font-size: 16px;
    --font-size-h1: 34px;
    --font-size-h2: 32px;
    --font-size-h3: 24px;
    --font-size-h4: 20px;
    --font-size-h5: 14.4px;
    --input-padding-vertical: calc(var(--grid-size) * 2);
    --input-padding-horizontal: calc(var(--grid-size) * 3);
    --input-icon-size: 50px;
    --layout-gap: var(--gap-double);
    --color-space: #354361;
    --color-cc-blue: #034ad8;
    --color-neptune: #034ad8;
    --color-double-cc-blue: #0015b7;
    --color-comet: #8bb4ed;
    --color-luna: #f0f5ff;
    --color-carbon: #393939;
    --color-nimbus: #757575;
    --color-alto: #cfcfcf;
    --color-stratus: #eee;
    --color-cloud: #fff;
    --color-emerald: #38a413;
    --color-ruby: #f03a47;
    --color-amber: #fc6d26;
    --color-sol: #f7e064;
    --color-sol-light: #fffbe4;
    --color-emerald-10: #ebf6e7;
    --color-ruby-10: #ffe7ea;
    --color-amber-10: #ffede5;
    --color-github: var(--color-carbon);
    --color-bitbucket: #0052cc;
    --color-gitlab: #fc6d26;
    --color-text: var(--color-carbon);
    --color-brand: var(--color-cc-blue);
    --cc-light-blue: var(--color-luna);
    --color-info: var(--color-cc-blue);
    --color-error: var(--color-ruby);
    --color-warning: var(--color-amber);
    --color-success: var(--color-emerald);
    --color-disabled: var(--color-nimbus);
    --color-working: var(--color-disabled);
    --border-color: var(--color-alto);
    --border-color-clickable: var(--color-alto);
    --border-color-clickable-hover: var(--color-nimbus);
    --border-color-clickable-focus: var(--color-nimbus);
    --border-color-clickable-active: var(--color-carbon);
    --border-color-disabled: var(--border-color);
    --border-color-working: var(--color-nimbus);
    --border-color-error: var(--color-ruby);
    --background-color: var(--color-cloud);
    --background-color-mid-grey: var(--border-color);
    --background-color-dark-grey: var(--color-alto);
    --background-color-disabled: var(--border-color-disabled);
    --background-color-working: var(--background-color-disabled);
    --background-color-info: var(--color-luna);
    --background-color-error: var(--color-ruby-10);
    --background-color-warning: var(--color-amber-10);
    --background-color-success: var(--color-emerald-10);
    --color-cloudflare-orange: #f5821f;
    --column-max-width: 626px;
    --editor-sidebar-width: 400px;
    --editor-sidebar-narrow-width: 30px;
    --editor-sidebar-toggle-width: 16px;
    --satellite-size: 40px;
    --satellite-move: calc(var(--satellite-size) * 7);
    --cc-icon-width: 24px;
    --cc-icon-height: 24px;
    --cc-icon-fill: currentcolor;

    --brand-experiment: hsl(270deg 80% 45%);
    --brand-experiment-15a: hsla(270, 100%, 50%, 0.251);
  }

  :global(html, body, input, button, textarea, select) {
    font-size: var(--font-size);
    font-family: var(--font-family);
    font-weight: normal;
    color: var(--color-text);
    line-height: 1.75;
    text-rendering: geometricprecision;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .editor-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .editor-wrapper-view {
    flex: 1 1 200px;
    position: relative;
    background-color: var(--background-color);
    overflow: hidden;
  }

  .file-preview {
    position: absolute;
    inset: 0;
    overflow: auto;
    overflow-x: hidden;
    will-change: transform;
    -webkit-overflow-scrolling: touch;
  }

  .sidebar-wrapper {
    transform: translateX(-100%) translateX(var(--editor-sidebar-narrow-width));
    width: 100%;
    max-width: var(--editor-sidebar-width);
    height: 100%;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    border-right: var(--border-width) solid var(--border-color);
    background-color: var(--background-color);
    overflow: visible;
    -webkit-overflow-scrolling: touch;
  }

  .yaml-sidebar-open .sidebar-wrapper {
    box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.1);
    transform: none;
    visibility: visible;
    z-index: 3;
  }
  @media (width >= 800px) {
    .yaml-sidebar-open .sidebar-wrapper {
      box-shadow: none;
      position: fixed;
    }

    .yaml-sidebar-open .editor-ui {
      padding-left: calc(var(--editor-sidebar-width) + var(--border-width));
      transition: padding-left 0s;
      transition-delay: var(--transition-duration);
      overflow: auto;
      max-height: 100%;
    }
  }

  .file-preview .editor-ui,
  .file-preview iframe,
  .file-preview > .yaml-object {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: block;
    transform: translate3d(0, 0, 0);
    border: 0;
    margin: 0;
  }

  .sidebar-content {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .split-data-view {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .split-data-view__editor {
    position: relative;
    flex: 1 1 100%;
    min-height: 0;
  }

  .yaml-editor {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: var(--background-color);
    overflow: hidden;
    position: relative;
  }

  .yaml-depth-slider {
    display: flex;
    flex-wrap: nowrap;
    transform: translateX(0);
    transition: transform 0.5s ease;
    overflow: visible;
    width: 100%;
    height: 100%;
    max-width: 640px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .yaml-depth-slider > .yaml-depth-wrapper {
    flex: 0 0 100%;
    height: 100%;
    width: 100%;
    transition: opacity 0.2s ease;
    overflow: auto;
  }

  .yaml-depth-slider > .yaml-depth-wrapper > .yaml-object,
  .yaml-depth-slider > .yaml-depth-wrapper > .yaml-array {
    box-sizing: border-box;
    width: 100%;
    padding: 20px 20px 0;
    -webkit-overflow-scrolling: touch;
    z-index: 2;
  }

  .yaml-depth-slider
    > .yaml-depth-wrapper
    > .yaml-object
    > .yaml-child-view-container,
  .yaml-depth-slider
    > .yaml-depth-wrapper
    > .yaml-array
    > .yaml-child-view-container {
    padding-bottom: 60px;
  }

  .yaml-child-view-container {
    position: relative;
  }

  .visual-editor {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
