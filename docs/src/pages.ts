import findPages from /* preval */ 'docs/src/modules/utils/findPages';

export interface MuiPage {
  pathname: string;
  children?: MuiPage[];
  disableDrawer?: boolean;
  displayNav?: boolean;
  /**
   * Props spread to the Link component
   */
  linkProps?: Record<string, unknown>;
  subheader?: string;
  /**
   * Overrides the default page title.
   */
  title?: string;
}

const pages: MuiPage[] = [
  {
    pathname: '/getting-started',
    children: [
      { pathname: '/getting-started/installation' },
      { pathname: '/getting-started/usage' },
      { pathname: '/getting-started/example-projects' },
      { pathname: '/getting-started/templates' },
      { pathname: '/getting-started/learn' },
      { pathname: '/getting-started/faq', title: 'FAQs' },
      { pathname: '/getting-started/supported-components' },
      { pathname: '/getting-started/supported-platforms' },
      { pathname: '/getting-started/support' },
    ],
  },
  {
    pathname: '/components',
    children: [
      {
        pathname: '/components',
        subheader: '/components/layout',
        children: [
          { pathname: '/components/box' },
          { pathname: '/components/container' },
          { pathname: '/components/grid' },
          { pathname: '/components/hidden' },
          { pathname: '/components/image-list' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/inputs',
        children: [
          { pathname: '/components/autocomplete' },
          { pathname: '/components/buttons', title: 'Button' },
          { pathname: '/components/button-group' },
          { pathname: '/components/checkboxes', title: 'Checkbox' },
          { pathname: '/components/floating-action-button' },
          { pathname: '/components/radio-buttons', title: 'Radio button' },
          { pathname: '/components/rating' },
          { pathname: '/components/selects', title: 'Select' },
          { pathname: '/components/slider' },
          { pathname: '/components/switches', title: 'Switch' },
          { pathname: '/components/text-fields', title: 'Text field' },
          { pathname: '/components/transfer-list' },
          { pathname: '/components/toggle-button' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/navigation',
        children: [
          { pathname: '/components/bottom-navigation' },
          { pathname: '/components/breadcrumbs' },
          { pathname: '/components/drawers', title: 'Drawer' },
          { pathname: '/components/links', title: 'Link' },
          { pathname: '/components/menus', title: 'Menu' },
          { pathname: '/components/pagination' },
          { pathname: '/components/speed-dial' },
          { pathname: '/components/steppers', title: 'Stepper' },
          { pathname: '/components/tabs' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/surfaces',
        children: [
          { pathname: '/components/accordion' },
          { pathname: '/components/app-bar' },
          { pathname: '/components/cards', title: 'Card' },
          { pathname: '/components/paper' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/feedback',
        children: [
          { pathname: '/components/alert' },
          { pathname: '/components/backdrop' },
          { pathname: '/components/dialogs' },
          { pathname: '/components/progress' },
          { pathname: '/components/skeleton' },
          { pathname: '/components/snackbars', title: 'Snackbar' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/data-display',
        children: [
          { pathname: '/components/avatars', title: 'Avatar' },
          { pathname: '/components/badges', title: 'Badge' },
          { pathname: '/components/chips', title: 'Chip' },
          { pathname: '/components/dividers', title: 'Divider' },
          { pathname: '/components/icons' },
          { pathname: '/components/material-icons' },
          { pathname: '/components/lists', title: 'List' },
          { pathname: '/components/tables', title: 'Table' },
          { pathname: '/components/tooltips', title: 'Tooltip' },
          { pathname: '/components/typography' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/data-grid',
        children: [
          {
            pathname: '/components/data-grid',
            subheader: '/components/data-grid/overview',
          },
          { pathname: '/components/data-grid/getting-started' },
          { pathname: '/components/data-grid/columns' },
          { pathname: '/components/data-grid/rows' },
          { pathname: '/components/data-grid/filtering', title: '🚧 Filtering' },
          { pathname: '/components/data-grid/pagination' },
          { pathname: '/components/data-grid/selection' },
          { pathname: '/components/data-grid/editing', title: '🚧 Editing' },
          { pathname: '/components/data-grid/rendering' },
          { pathname: '/components/data-grid/export', title: '🚧 Export & Import' },
          { pathname: '/components/data-grid/localization', title: '🚧 Localization' },
          { pathname: '/components/data-grid/group-pivot', title: '🚧 Group & Pivot' },
          { pathname: '/components/data-grid/accessibility' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/utils',
        children: [
          { pathname: '/components/click-away-listener' },
          { pathname: '/components/css-baseline', title: 'CSS Baseline' },
          { pathname: '/components/modal' },
          { pathname: '/components/no-ssr', title: 'No SSR' },
          { pathname: '/components/popover' },
          { pathname: '/components/popper' },
          { pathname: '/components/portal' },
          { pathname: '/components/textarea-autosize' },
          { pathname: '/components/transitions' },
          { pathname: '/components/use-media-query', title: 'useMediaQuery' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/lab',
        children: [
          { pathname: '/components/about-the-lab', title: 'About the lab 🧪' },
          {
            pathname: '/components',
            subheader: '/components/lab-pickers',
            title: 'Date / Time',
            children: [
              { pathname: '/components/pickers', title: 'Introduction' },
              { pathname: '/components/date-picker' },
              { pathname: '/components/date-range-picker', title: 'Date Range Picker ⚡️' },
              { pathname: '/components/date-time-picker' },
              { pathname: '/components/time-picker' },
            ],
          },
          { pathname: '/components/timeline' },
          { pathname: '/components/trap-focus' },
          { pathname: '/components/tree-view' },
        ],
      },
    ],
  },
  {
    title: 'Component API',
    pathname: '/api-docs',
    children: [
      ...findPages[0].children!,
      ...[{ pathname: '/api-docs/data-grid' }, { pathname: '/api-docs/x-grid' }],
    ]
      .sort((a, b) =>
        a.pathname.replace('/api-docs/', '').localeCompare(b.pathname.replace('/api-docs/', '')),
      )
      .map((page) => {
        return { ...page, linkProps: { as: page.pathname.replace(/^\/api-docs/, '/api') } };
      }),
  },
  {
    pathname: '/system',
    children: [
      { pathname: '/system/basics' },
      { pathname: '/system/properties' },
      { pathname: '/system/borders' },
      { pathname: '/system/display' },
      { pathname: '/system/flexbox' },
      { pathname: '/system/palette' },
      { pathname: '/system/positions' },
      { pathname: '/system/shadows' },
      { pathname: '/system/sizing' },
      { pathname: '/system/spacing' },
      { pathname: '/system/screen-readers' },
      { pathname: '/system/typography' },
      { pathname: '/system/advanced' },
    ],
  },
  {
    pathname: '/styles',
    children: [
      { pathname: '/styles/basics' },
      { pathname: '/styles/advanced' },
      { pathname: '/styles/api', title: 'API' },
    ],
  },
  {
    pathname: '/customization',
    children: [
      {
        pathname: '/customization',
        subheader: '/customization/theme',
        children: [
          { pathname: '/customization/theming' },
          { pathname: '/customization/palette' },
          { pathname: '/customization/typography' },
          { pathname: '/customization/spacing' },
          { pathname: '/customization/breakpoints' },
          { pathname: '/customization/density' },
          { pathname: '/customization/z-index', title: 'z-index' },
          { pathname: '/customization/globals' },
          { pathname: '/customization/transitions' },
        ],
      },
      { pathname: '/customization/components' },
      { pathname: '/customization/color' },
      { pathname: '/customization/default-theme', title: 'Default Theme' },
    ],
  },
  {
    pathname: '/guides',
    children: [
      { pathname: '/guides/api', title: 'API Design Approach' },
      { pathname: '/guides/typescript', title: 'TypeScript' },
      { pathname: '/guides/interoperability', title: 'Style Library Interoperability' },
      { pathname: '/guides/minimizing-bundle-size' },
      { pathname: '/guides/composition' },
      { pathname: '/guides/server-rendering' },
      { pathname: '/guides/responsive-ui', title: 'Responsive UI' },
      { pathname: '/guides/migration-v4', title: 'Migration From v4' },
      { pathname: '/guides/migration-v3', title: 'Migration From v3' },
      { pathname: '/guides/migration-v0x', title: 'Migration From v0.x' },
      { pathname: '/guides/testing' },
      { pathname: '/guides/localization' },
      { pathname: '/guides/content-security-policy', title: 'Content Security Policy' },
      { pathname: '/guides/right-to-left', title: 'Right-to-left' },
      { pathname: '/guides/flow' },
    ],
  },
  {
    pathname: 'https://material-ui.com/store/',
    title: 'Premium themes',
    linkProps: {
      'data-ga-event-category': 'store',
      'data-ga-event-action': 'click',
      'data-ga-event-label': 'sidenav',
    },
  },
  {
    pathname: '/discover-more',
    children: [
      { pathname: '/discover-more/showcase' },
      { pathname: '/discover-more/related-projects' },
      { pathname: '/discover-more/roadmap' },
      { pathname: '/discover-more/backers', title: 'Sponsors & Backers' },
      { pathname: '/discover-more/vision' },
      { pathname: '/discover-more/team' },
      { pathname: '/discover-more/changelog' },
      { pathname: '/discover-more/languages' },
    ],
  },
  { pathname: '/versions', displayNav: false },
  { pathname: '/', displayNav: false, disableDrawer: true },
  { pathname: 'https://medium.com/material-ui', title: 'Blog' },
];

export default pages;