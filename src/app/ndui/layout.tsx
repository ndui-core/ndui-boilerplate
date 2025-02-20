"use client";
import { Button, LayoutWrapper, Menu } from "ndui-ahrom";
import Link from "next/link";

const items = [
  {
    id: "1",
    label: "Edit",
    icon: "✏️",
    onClick: () => console.log("Edit clicked"),
  },
  {
    id: "2",
    label: "Delete",
    icon: "🗑️",
    onClick: () => console.log("Delete clicked"),
  },
  { id: "3", label: "-", divider: true },
  {
    id: "4",
    label: "Settings",
    icon: "⚙️",
  },
];

const components = [
  { name: "Alerts", path: "/ndui/Alerts" },
  { name: "Autocomplete", path: "/ndui/Autocomplete" },
  { name: "Badge", path: "/ndui/Badge" },
  { name: "Breadcrumbs", path: "/ndui/Breadcrumbs" },
  { name: "ButtonGroup", path: "/ndui/ButtonGroup" },
  { name: "Buttons", path: "/ndui/buttons" },
  { name: "Card", path: "/ndui/Card" },
  { name: "Checkbox", path: "/ndui/Checkbox" },
  { name: "Chips", path: "/ndui/Chips" },
  { name: "Drawer", path: "/ndui/Drawer" },
  { name: "Dropdown", path: "/ndui/Dropdown" },
  { name: "Fab", path: "/ndui/Fab" },
  { name: "Form", path: "/ndui/Form" },
  { name: "Grid", path: "/ndui/Grid" },
  { name: "Input", path: "/ndui/Input" },
  { name: "Menu", path: "/ndui/Menu" },
  { name: "Modal", path: "/ndui/Modal" },
  { name: "Radio", path: "/ndui/Radio" },
  { name: "RangeSlider", path: "/ndui/RangeSlider" },
  { name: "RichTextEditor", path: "/ndui/RichTextEditor" },
  { name: "Select", path: "/ndui/Select" },
  { name: "Skeleton", path: "/ndui/Skeleton" },
  { name: "Slider", path: "/ndui/Slider" },
  { name: "Stepper", path: "/ndui/Stepper" },
  { name: "Table", path: "/ndui/Table" },
  { name: "Tabs", path: "/ndui/Tabs" },
  { name: "Timeline", path: "/ndui/Timeline" },
  { name: "Toggle", path: "/ndui/Toggle" },
  { name: "Toolbar", path: "/ndui/Toolbar" },
  { name: "Tooltip", path: "/ndui/Tooltip" },
  { name: "Tree", path: "/ndui/Tree" },
];

const side = (
  <aside className="w-full bg-base-200 p-6 fixed h-full overflow-y-auto">
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-2">NDUI</h1>
      <p className="text-sm text-gray-600">Component Documentation</p>
    </div>
    <nav>
      <ul className="space-y-2">
        {components.map((component) => (
          <li key={component.path}>
            <Link
              href={component.path}
              className="block py-2 px-4 rounded hover:bg-base-300 transition-colors"
            >
              {component.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);

const tool = (
  <div className="flex gap-2 justify-between w-full">
    <p>test</p>

    <div className="flex ">
      <Button variant="ghost">⚙️</Button>

      <Menu
        position="right"
        trigger={<Button variant="ghost">menu</Button>}
        items={items}
      />
    </div>
  </div>
);


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper
          drawerContent={side}
          toolbarContent={tool}
          drawerWidth="300px"
          rtl
          miniDrawerWidth="60px"
          breakpoint={1024}
          bottomBarItems={[
            { icon: "🏠", label: "Home", value: "home", href: "/ndui" },
            {
              icon: "⚙️",
              label: "drawer",
              value: "drawer",
              href: "/ndui/Drawer",
            },
          ]}
        >
          <div className="p-8">{children}</div>
        </LayoutWrapper>
      </body>
    </html>
  );
}
