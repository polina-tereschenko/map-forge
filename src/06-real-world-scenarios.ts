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

/**
 * Task 16: Calculate User Statistics
 * 
 * Implement a function that takes an array of users and returns an object
 * with statistics about the users.
 * 
 * Example:
 * Input: [
 *   { id: 1, name: 'John', email: 'john@example.com', age: 30, active: true },
 *   { id: 2, name: 'Jane', email: 'jane@example.com', age: 25, active: false },
 *   { id: 3, name: 'Bob', email: 'bob@example.com', age: 35, active: true }
 * ]
 * Output: {
 *   totalUsers: 3,
 *   activeUsers: 2,
 *   averageAge: 30,
 *   ageGroups: { '20-29': 1, '30-39': 2 }
 * }
 */
export function calculateUserStatistics(users: User[]): {
    totalUsers: number;
    activeUsers: number;
    averageAge: number;
    ageGroups: Record<string, number>;
} {
    const totalUsers = users.length;
    const activeUsers = users.filter(user => user.active).length;
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    const averageAge = totalAge / totalUsers;
    const ageGroups: Record<string, number> = {};

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const decade = Math.floor(user.age / 10) * 10;
        const groupKey = `${decade}-${decade + 9}`;

        if (ageGroups[groupKey]) {
            ageGroups[groupKey] += 1;
        } else {
            ageGroups[groupKey] = 1;
        }
    }

    return {
        totalUsers,
        activeUsers,
        averageAge,
        ageGroups
    };
}

/**
 * Task 17: Process Order Data
 * 
 * Implement a function that takes an array of orders and returns a summary
 * of sales data grouped by product.
 * 
 * Example:
 * Input: [
 *   {
 *     id: 1,
 *     userId: 1,
 *     products: [
 *       { id: 1, name: 'Product A', price: 10, quantity: 2 },
 *       { id: 2, name: 'Product B', price: 20, quantity: 1 }
 *     ],
 *     status: 'completed',
 *     date: '2024-01-01'
 *   }
 * ]
 * Output: {
 *   'Product A': { totalSold: 2, totalRevenue: 20 },
 *   'Product B': { totalSold: 1, totalRevenue: 20 }
 * }
 */
export function processOrderData(orders: Order[]): Record<string, {
    totalSold: number;
    totalRevenue: number;
}> {
    const productStatistics: Record<string, { totalSold: number; totalRevenue: number }> = {};

    for (const order of orders) {
        for (const detailOrder of order.products) {
            const name = detailOrder.name;
            const price = detailOrder.price;
            const quantity = detailOrder.quantity;
            if (!(name in productStatistics)) {
                productStatistics[name] = {
                    totalSold: 0,
                    totalRevenue: 0,
                };
            }
            productStatistics[name].totalSold += quantity;
            productStatistics[name].totalRevenue += price * quantity;
        }
    }

    return productStatistics;
}

/**
 * Task 18: Generate User Activity Report
 * 
 * Implement a function that takes an array of users and orders, and returns
 * a report of user activity including their order history and spending.
 * 
 * Example:
 * Input: [
 *   { id: 1, name: 'John', email: 'john@example.com', age: 30, active: true }
 * ], [
 *   {
 *     id: 1,
 *     userId: 1,
 *     products: [{ id: 1, name: 'Product A', price: 10, quantity: 2 }],
 *     status: 'completed',
 *     date: '2024-01-01'
 *   }
 * ]
 * Output: {
 *   'john@example.com': {
 *     name: 'John',
 *     totalOrders: 1,
 *     totalSpent: 20,
 *     averageOrderValue: 10,
 *     lastOrderDate: '2024-01-01'
 *   }
 * }
 */
export function generateUserActivityReport(
    users: User[],
    orders: Order[]
): Record<string, {
    name: string;
    totalOrders: number;
    totalSpent: number;
    averageOrderValue: number;
    lastOrderDate: string;
}> {
    const result: Record<string, {
        name: string;
        totalOrders: number;
        totalSpent: number;
        averageOrderValue: number;
        lastOrderDate: string;
    }> = {};

    for (const user of users) {
        let totalOrders = 0;
        let totalSpent = 0;
        let lastOrderDate = '';
        let totalQuantity = 0;
        for (const orderDetail of orders) {
            if (orderDetail.userId === user.id) {
                totalOrders++;
                let orderTotal = 0;
                for (const productdetail of orderDetail.products) {
                    const price = productdetail.price;
                    orderTotal += productdetail.price * productdetail.quantity;
                    totalQuantity += productdetail.quantity;
                }
                totalSpent += orderTotal;
                if (lastOrderDate === '' || orderDetail.date > lastOrderDate) {
                    lastOrderDate = orderDetail.date;
                }
            }
        }
        result[user.email] = {
            name: user.name,
            totalOrders,
            totalSpent,
            averageOrderValue: Math.round(totalSpent / totalQuantity),
            lastOrderDate
        };
    }
    return result;
} 