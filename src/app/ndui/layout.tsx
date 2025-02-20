import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-base-200 p-6 fixed h-full overflow-y-auto">
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

      {/* Main content */}
      <main className="flex-1 ml-64">
        <div className="">
          {children}
        </div>
      </main>
    </div>
  );
}