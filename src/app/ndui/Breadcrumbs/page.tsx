import { Breadcrumbs } from 'ndui-ahrom';

const items = [
  {
    label: 'Home',
    href: '/',
    icon: '🏠'
  },
  {
    label: 'Products',
    href: '/products',
    icon: '📦'
  },
  {
    label: 'Current Page',
    icon: '📄'
  }
];

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Buttons Test</h1>

          <div className="flex flex-col my-8 gap-4">
            // Basic usage
            <Breadcrumbs items={items} />
            // Custom separator
            <Breadcrumbs items={items} separator=">" />
            // Custom styling
            <Breadcrumbs items={items} className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
