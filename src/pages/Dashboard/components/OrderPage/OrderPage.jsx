import * as React from 'react';
import './OrderPage.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';

class OrderPage extends React.Component {
    render() {
        const deliveries = [
            { id: '0451', name: 'Vipul Mandesha', payment: 'Online', deliveryType: 'Home Delivery', status: 'Delivered', amount: 'Rs 1,450' },
            { id: '0452', name: 'Divya Mandal', payment: 'Cash', deliveryType: 'Dine In', status: 'Delivered', amount: 'Rs 2,350' },
            { id: '0453', name: 'Rakshita Bhushan', payment: 'Online', deliveryType: 'Home Delivery', status: 'Delivered', amount: 'Rs 3,000' },
            { id: '0453', name: 'Rakshita Bhushan', payment: 'Online', deliveryType: 'Home Delivery', status: 'Delivered', amount: 'Rs 3,000' },
            { id: '0451', name: 'Vipul Mandesha', payment: 'Online', deliveryType: 'Home Delivery', status: 'Delivered', amount: 'Rs 1,450' },
            { id: '0453', name: 'Rakshita Bhushan', payment: 'Online', deliveryType: 'Home Delivery', status: 'Delivered', amount: 'Rs 3,000' },
            { id: '0451', name: 'Vipul Mandesha', payment: 'Online', deliveryType: 'Home Delivery', status: 'Delivered', amount: 'Rs 1,450' },
            { id: '0453', name: 'Rakshita Bhushan', payment: 'Online', deliveryType: 'Home Delivery', status: 'Delivered', amount: 'Rs 3,000' },
            { id: '0453', name: 'Rakshita Bhushan', payment: 'Online', deliveryType: 'Home Delivery', status: 'Delivered', amount: 'Rs 3,000' },
        ];

        return (
            <div className="delivery-table">
                <div>
                    <Stack spacing={2} marginBottom={2} direction="row">
                        <Button variant="outlined" color="secondary" size="small">All 359</Button>
                        <Button variant="outlined" color="primary" size="small">In Process 23</Button>
                        <Button variant="contained" color="success" size="small">Delivered 33</Button>
                        <Button variant="outlined" color="error" size="small">Cancel 6</Button>
                    </Stack>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer Name</th>
                            <th>Payment</th>
                            <th>Delivery Type</th>
                            <th>Status</th>
                            <th>Amount</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deliveries.map((delivery) => (
                            <tr key={delivery.id}>
                                <td>{delivery.id}</td>
                                <td>{delivery.name}</td>
                                <td>{delivery.payment}</td>
                                <td>{delivery.deliveryType}</td>
                                <td className="status">{delivery.status}</td>
                                <td>{delivery.amount}</td>
                                <td><a href="tel:1234567890">
                                    <PhoneIcon />
                                </a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default OrderPage;
