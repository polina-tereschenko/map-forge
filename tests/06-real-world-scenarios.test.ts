import {
    calculateUserStatistics,
    processOrderData,
    generateUserActivityReport
} from '../src/06-real-world-scenarios';

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    active: boolean;
}

interface Order {
    id: number;
    userId: number;
    products: Array<{
        id: number;
        name: string;
        price: number;
        quantity: number;
    }>;
    status: 'pending' | 'completed' | 'cancelled';
    date: string;
}

describe('Calculate User Statistics', () => {
    describe('calculateUserStatistics', () => {
        it('should calculate correct statistics for active and inactive users', () => {
            const users: User[] = [
                { id: 1, name: 'John', email: 'john@example.com', age: 30, active: true },
                { id: 2, name: 'Jane', email: 'jane@example.com', age: 25, active: false },
                { id: 3, name: 'Bob', email: 'bob@example.com', age: 35, active: true }
            ];
            const result = calculateUserStatistics(users);
            expect(result).toEqual({
                totalUsers: 3,
                activeUsers: 2,
                averageAge: 30,
                ageGroups: { '20-29': 1, '30-39': 2 }
            });
        });
    });

    describe('processOrderData', () => {
        it('should return empty object for empty orders array', () => {
            const orders: Order[] = [];
            const result = processOrderData(orders);
            expect(result).toEqual({});
        });

        it('should summarize product sales from completed orders', () => {
            const orders: Order[] = [
                {
                    id: 1,
                    userId: 1,
                    products: [
                        { id: 1, name: 'Product A', price: 10, quantity: 2 },
                        { id: 2, name: 'Product B', price: 20, quantity: 1 }
                    ],
                    status: 'completed',
                    date: '2024-01-01'
                },
                {
                    id: 2,
                    userId: 2,
                    products: [
                        { id: 1, name: 'Product A', price: 10, quantity: 1 },
                        { id: 3, name: 'Product C', price: 15, quantity: 3 }
                    ],
                    status: 'completed',
                    date: '2024-01-02'
                }
            ];
            const result = processOrderData(orders);
            expect(result).toEqual({
                'Product A': { totalSold: 3, totalRevenue: 30 },
                'Product B': { totalSold: 1, totalRevenue: 20 },
                'Product C': { totalSold: 3, totalRevenue: 45 }
            });
        });
    });

    describe('generateUserActivityReport', () => {
        it('should generate correct report for users with orders', () => {
            const users: User[] = [
                { id: 1, name: 'John', email: 'john@example.com', age: 30, active: true },
                { id: 2, name: 'Jane', email: 'jane@example.com', age: 25, active: false },
            ];
            const orders: Order[] = [
                {
                    id: 1,
                    userId: 1,
                    products: [
                        { id: 1, name: 'Product A', price: 10, quantity: 2 }
                    ],
                    status: 'completed',
                    date: '2024-01-01'
                },
                {
                    id: 2,
                    userId: 2,
                    products: [
                        { id: 2, name: 'Product B', price: 20, quantity: 1 },
                        { id: 3, name: 'Product C', price: 15, quantity: 3 }
                    ],
                    status: 'completed',
                    date: '2024-01-19'
                },
                {
                    id: 3,
                    userId: 1,
                    products: [
                        { id: 4, name: 'Product A', price: 20, quantity: 1 },
                        { id: 5, name: 'Product D', price: 15, quantity: 3 }
                    ],
                    status: 'completed',
                    date: '2024-01-15'
                },
            ];
            const result = generateUserActivityReport(users, orders);
            expect(result).toEqual({
                'john@example.com': {
                    name: 'John',
                    totalOrders: 2,
                    totalSpent: 85,
                    averageOrderValue: 14,
                    lastOrderDate: '2024-01-15'
                },
                'jane@example.com': {
                    name: 'Jane',
                    totalOrders: 1,
                    totalSpent: 65,
                    averageOrderValue: 16,
                    lastOrderDate: '2024-01-19'
                }
            });
        });
    });
});