import React, { useContext, useState, useEffect } from "react";
import CartStatus from "./CartStatus";
import { ProductContext } from "../../../provider/ItemProvider/ProductProvider";


const ChartDashboard = () => {
  const { Products } = useContext(ProductContext);

  // const { users } = useContext(UserContext);
  // const [totalUsers, setTotalUsers] = useState(0);

  // useEffect(() => {
  //   calculateTotalUsers();
  // }, [users]);

  // useEffect(() => {
  //   calculateTotalQuantity();
  // }, [Products]);

  // useEffect(() => {
  //   if (issueTo) {
  //     calculateTotalIssueQuantity();
  //   }
  // }, [issueTo]);

  // const calculateTotalQuantity = () => {
  //   let totalQuantity = 0;
  //   Products.forEach(Product => {
  //     totalQuantity += Product.quantity;
  //   });
  //   setProductQuantity(totalQuantity);
  // };

  // const calculateTotalIssueQuantity = () => {
  //   let totalIssueQuantity = 0;
  //   issueTo.forEach(issue => {
  //     totalIssueQuantity += issue.issueProductQuantity;
  //   });
  //   setProductIssueQuantity(totalIssueQuantity);
  // };

  // const calculateTotalUsers = () => {
  //   setTotalUsers(users.length);
  // };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <CartStatus title="Total Products" total={400} rate="0.43%" levelUp>
          <svg
            className="fill-primary dark:fill-lime-500"
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG path */}
          </svg>
        </CartStatus>
      
          <CartStatus title="Products Sold" total={100} rate="4.35%" levelUp>
            <svg
              className="fill-primary dark:fill-lime-500"
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG path */}
            </svg>
          </CartStatus>
        
        <CartStatus title="Total Users" total={50} rate="2.59%" levelUp>
          <svg
            className="fill-primary dark:fill-lime-500"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG path */}
          </svg>
        </CartStatus>
        <CartStatus title="Total Earn" total={10000} rate="2.59%" levelUp>
          <svg
            className="fill-primary dark:fill-lime-500"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG path */}
          </svg>
        </CartStatus>
        <CartStatus title="Total Order" total={10000} rate="2.59%" levelUp>
          <svg
            className="fill-primary dark:fill-lime-500"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG path */}
          </svg>
        </CartStatus>
        <CartStatus title="Total Expanse" total={10000} rate="2.59%" levelUp>
          <svg
            className="fill-primary dark:fill-lime-500"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG path */}
          </svg>
        </CartStatus>
      </div>
    </div>
  );
};

export default ChartDashboard;
