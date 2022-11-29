import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyers from '../hooks/useBuyers';
import useSeller from '../hooks/useSellers';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {

  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)
  const [isBuyer] = useBuyers(user?.email)
  const [isSeller] = useSeller(user?.email)


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <Outlet></Outlet>  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      {
        isBuyer && <>
        <li><Link to='/dashboard'>My bookings</Link></li>
        </>
      }
      {
        isAdmin && <>
        <li><Link to='/dashboard/buyers'>All Buyers</Link></li>
        <li><Link to='/dashboard/sellers'>All Sellers</Link></li>
        </>
      }
      {
        isSeller && <>
        <li><Link to='/dashboard/addProduct'>Add Products</Link></li>
        <li><Link to='/dashboard/myProducts'>My Products</Link></li>
        </>
      }
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;