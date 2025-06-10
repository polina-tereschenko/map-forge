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
    const result = {
        totalUsers: 0,
        activeUsers: 0,
        averageAge: 0,
        ageGroups: {}
    };
    for (const item of users) {
        console.log(item);
        // const currCount = result[item] ?? 0;
        // result[item] = currCount + 1;
    };    
    
    return result;
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
    // TODO: Implement this function
    return {};
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
 *     averageOrderValue: 20,
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
    // TODO: Implement this function
    return {};
} 