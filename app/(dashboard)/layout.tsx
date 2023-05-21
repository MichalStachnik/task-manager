import '@/styles/global.css'
import GlassPane from "@/components/GlassPane";
import Sidebar from '@/components/Sidebar';

interface DashboardRouteLayoutProps {
  children: React.ReactNode;
}

const DashboardRouteLayout = ({ children }: DashboardRouteLayoutProps) => {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full p-6 flex align-center container mx-auto">
          <Sidebar />
          {children}
        </GlassPane>
        <div id="modal"></div>
      </body>
    </html>
  )
};

export default DashboardRouteLayout;