import React, { useContext } from 'react';
import { SoldContext } from '../../../provider/SoldProvider/SoldProvider';

const AllSoldHistory = () => {
    const { allBoughtProduct } = useContext(SoldContext);

    return (
        <div>
            <h1>All Sold Product</h1>
            {allBoughtProduct ? (
                <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Currency</th>
                            <th>Total Amount</th>
                            <th>Transaction ID</th>
                            <th>Paid Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        allBoughtProduct.map(boughtProduct => <tr>
                            <td>{boughtProduct.name}</td>
                            <td>{boughtProduct.email}</td>
                            <td>{boughtProduct.address}</td>
                            <td>{boughtProduct.currency}</td>
                            <td>{boughtProduct.totalAmount}</td>
                            <td>{boughtProduct.transactionId}</td>
                            <td>{boughtProduct.paidStatus ? 'Paid' : 'Not Paid'}</td>
                        </tr>)
                       }
                    </tbody>
                </table>
            ) : (
                <p>No product data available.</p>
            )}
        </div>
    );
};

export default AllSoldHistory;
