import '@/styles/global.css'
import GlassPane from "@/components/GlassPane";

interface DashboardRouteLayoutProps {
  children: React.ReactNode;
}

const DashboardRouteLayout = ({ children }: DashboardRouteLayoutProps) => {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full p-6 flex align-center container mx-auto">
          {children}
        </GlassPane>
      </body>
    </html>
  )
};

export default DashboardRouteLayout;