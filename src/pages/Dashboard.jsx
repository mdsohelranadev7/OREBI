import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    LayoutDashboard,
    ShoppingBag,
    Package,
    Users,
    TrendingUp,
    TrendingDown,
    ArrowUpRight,
    Search,
    Bell,
    Settings,
    LogOut,
    CheckCircle2,
    Clock,
    AlertCircle,
    ChevronRight,
    Menu,
    X,
    Filter,
    DollarSign,
    Calendar,
    Eye,
    Plus,
    User,
    Mail,
    Phone,
    MapPin,
    ShieldCheck
} from 'lucide-react'
import Container from '../components/Container'

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('overview')
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [timeframe, setTimeframe] = useState('monthly')
    const [searchQuery, setSearchQuery] = useState('')
    const [statusFilter, setStatusFilter] = useState('all')

    // Overview Statistics
    const stats = [
        {
            title: 'Total Sales',
            value: '$48,290.50',
            change: '+14.6%',
            isPositive: true,
            icon: DollarSign,
            description: 'vs. last month ($42,120.00)',
            color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
        },
        {
            title: 'Total Orders',
            value: '1,429',
            change: '+8.2%',
            isPositive: true,
            icon: ShoppingBag,
            description: 'vs. last month (1,320)',
            color: 'bg-blue-50 text-blue-600 border-blue-200'
        },
        {
            title: 'Total Products',
            value: '384',
            change: '+18 new',
            isPositive: true,
            icon: Package,
            description: '32 low stock items',
            color: 'bg-purple-50 text-purple-600 border-purple-200'
        },
        {
            title: 'Total Customers',
            value: '3,892',
            change: '+22.4%',
            isPositive: true,
            icon: Users,
            description: '240 new this week',
            color: 'bg-amber-50 text-amber-600 border-amber-200'
        }
    ]

    // Monthly revenue chart data
    const monthlyData = [
        { month: 'Jan', revenue: 28400, orders: 820 },
        { month: 'Feb', revenue: 31200, orders: 940 },
        { month: 'Mar', revenue: 29800, orders: 890 },
        { month: 'Apr', revenue: 36500, orders: 1100 },
        { month: 'May', revenue: 42100, orders: 1250 },
        { month: 'Jun', revenue: 39400, orders: 1180 },
        { month: 'Jul', revenue: 44800, orders: 1340 },
        { month: 'Aug', revenue: 41200, orders: 1210 },
        { month: 'Sep', revenue: 46900, orders: 1390 },
        { month: 'Oct', revenue: 43500, orders: 1290 },
        { month: 'Nov', revenue: 48290, orders: 1429 },
        { month: 'Dec', revenue: 52100, orders: 1560 },
    ]

    const maxRevenue = Math.max(...monthlyData.map(d => d.revenue))

    // Recent orders
    const [orders, setOrders] = useState([
        {
            id: '#ORD-9842',
            customer: 'Sophia Anderson',
            email: 'sophia.a@example.com',
            items: 'Black Backpack, Ceramic Cup',
            date: 'Nov 19, 2026',
            amount: 50.00,
            status: 'Completed'
        },
        {
            id: '#ORD-9841',
            customer: 'Liam Johnson',
            email: 'liam.j@example.com',
            items: 'Round Woven Basket',
            date: 'Nov 19, 2026',
            amount: 25.00,
            status: 'Processing'
        },
        {
            id: '#ORD-9840',
            customer: 'Emma Williams',
            email: 'emma.w@example.com',
            items: 'Modern Desk Table',
            date: 'Nov 18, 2026',
            amount: 120.00,
            status: 'Completed'
        },
        {
            id: '#ORD-9839',
            customer: 'Noah Brown',
            email: 'noah.b@example.com',
            items: 'Wireless Headphones',
            date: 'Nov 18, 2026',
            amount: 75.00,
            status: 'Pending'
        },
        {
            id: '#ORD-9838',
            customer: 'Olivia Davis',
            email: 'olivia.d@example.com',
            items: 'Sun Glasses, Casual Cap',
            date: 'Nov 17, 2026',
            amount: 65.00,
            status: 'Completed'
        },
        {
            id: '#ORD-9837',
            customer: 'James Wilson',
            email: 'james.w@example.com',
            items: 'Gray Backpack',
            date: 'Nov 17, 2026',
            amount: 30.00,
            status: 'Cancelled'
        }
    ])

    // Top Selling Products
    const topProducts = [
        { name: 'Black Backpack', category: 'Bags', sales: 432, revenue: '$15,120', stock: 48 },
        { name: 'Wireless Headphones', category: 'Electronics', sales: 328, revenue: '$24,600', stock: 19 },
        { name: 'Modern Desk Table', category: 'Furniture', sales: 184, revenue: '$22,080', stock: 12 },
        { name: 'Round Woven Basket', category: 'Accessories', sales: 296, revenue: '$7,400', stock: 65 },
        { name: 'Ceramic Coffee Cup', category: 'Accessories', sales: 245, revenue: '$3,675', stock: 92 },
    ]

    // Recent Customer Activities
    const activities = [
        {
            user: 'Sarah Miller',
            action: 'Placed new order #ORD-9843',
            time: '5 minutes ago',
            type: 'order'
        },
        {
            user: 'Alex Turner',
            action: 'Created customer account',
            time: '24 minutes ago',
            type: 'user'
        },
        {
            user: 'David Clark',
            action: 'Left a 5-star review on Black Backpack',
            time: '1 hour ago',
            type: 'review'
        },
        {
            user: 'Emily Watson',
            action: 'Completed payment of $120.00',
            time: '2 hours ago',
            type: 'payment'
        },
        {
            user: 'Michael Reed',
            action: 'Requested address change for #ORD-9839',
            time: '3 hours ago',
            type: 'support'
        }
    ]

    // Categories breakdown
    const categoryStats = [
        { name: 'Electronics', percent: 36, amount: '$17,384', color: 'bg-primary' },
        { name: 'Furniture', percent: 28, amount: '$13,521', color: 'bg-emerald-600' },
        { name: 'Bags & Accessories', percent: 22, amount: '$10,623', color: 'bg-blue-600' },
        { name: 'Clothes & Shoes', percent: 14, amount: '$6,762', color: 'bg-amber-500' },
    ]

    // Filtered orders
    const filteredOrders = orders.filter(order => {
        const matchesSearch = order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.items.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesStatus = statusFilter === 'all' || order.status.toLowerCase() === statusFilter.toLowerCase()
        return matchesSearch && matchesStatus
    })

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Completed':
                return 'bg-emerald-50 text-emerald-700 border-emerald-200'
            case 'Processing':
                return 'bg-blue-50 text-blue-700 border-blue-200'
            case 'Pending':
                return 'bg-amber-50 text-amber-700 border-amber-200'
            case 'Cancelled':
                return 'bg-rose-50 text-rose-700 border-rose-200'
            default:
                return 'bg-gray-100 text-gray-700 border-gray-200'
        }
    }

    return (
        <div className="bg-[#f8f9fa] min-h-screen font-sans pb-16">
            {/* Top Navigation Breadcrumb Bar */}
            <div className="bg-white border-b border-gray-200">
                <Container className="py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2 text-sm text-gry">
                            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                            <ChevronRight size={14} />
                            <span className="font-semibold text-primary">Admin Dashboard</span>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <span className="inline-flex items-center gap-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Live Store
                            </span>
                            <Link
                                to="/shop"
                                className="text-xs font-bold uppercase tracking-wider text-primary border border-primary px-3 py-1.5 hover:bg-primary hover:text-white transition-colors"
                            >
                                View Shop
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>

            <Container className="mt-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Mobile Sidebar Toggle Button */}
                    <div className="lg:hidden flex items-center justify-between bg-white p-4 border border-gray-200 rounded">
                        <div className="flex items-center gap-x-3">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                SR
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-primary">Sohel Rana</h4>
                                <p className="text-xs text-gry">Store Administrator</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 border border-gray-200 rounded text-primary hover:bg-gray-50"
                        >
                            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                    {/* Sidebar Navigation */}
                    <div
                        className={`w-full lg:w-64 bg-white border border-gray-200 rounded p-6 shrink-0 h-fit ${
                            sidebarOpen ? 'block' : 'hidden lg:block'
                        }`}
                    >
                        {/* Profile Summary */}
                        <div className="hidden lg:flex items-center gap-x-3 pb-6 border-b border-gray-100">
                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-sm">
                                SR
                            </div>
                            <div>
                                <h4 className="font-bold text-base text-primary">Sohel Rana</h4>
                                <p className="text-xs text-gry flex items-center gap-1 mt-0.5">
                                    <ShieldCheck size={13} className="text-emerald-600" /> Super Admin
                                </p>
                            </div>
                        </div>

                        {/* Navigation Menu Links */}
                        <div className="mt-6 space-y-1">
                            <button
                                onClick={() => { setActiveTab('overview'); setSidebarOpen(false); }}
                                className={`w-full flex items-center gap-x-3 px-4 py-3 rounded text-sm font-semibold transition-all ${
                                    activeTab === 'overview'
                                        ? 'bg-primary text-white shadow-sm'
                                        : 'text-gry hover:bg-gray-50 hover:text-primary'
                                }`}
                            >
                                <LayoutDashboard size={18} />
                                <span>Overview</span>
                            </button>

                            <button
                                onClick={() => { setActiveTab('orders'); setSidebarOpen(false); }}
                                className={`w-full flex items-center justify-between px-4 py-3 rounded text-sm font-semibold transition-all ${
                                    activeTab === 'orders'
                                        ? 'bg-primary text-white shadow-sm'
                                        : 'text-gry hover:bg-gray-50 hover:text-primary'
                                }`}
                            >
                                <div className="flex items-center gap-x-3">
                                    <ShoppingBag size={18} />
                                    <span>Orders</span>
                                </div>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                    activeTab === 'orders' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
                                }`}>
                                    {orders.length}
                                </span>
                            </button>

                            <button
                                onClick={() => { setActiveTab('products'); setSidebarOpen(false); }}
                                className={`w-full flex items-center justify-between px-4 py-3 rounded text-sm font-semibold transition-all ${
                                    activeTab === 'products'
                                        ? 'bg-primary text-white shadow-sm'
                                        : 'text-gry hover:bg-gray-50 hover:text-primary'
                                }`}
                            >
                                <div className="flex items-center gap-x-3">
                                    <Package size={18} />
                                    <span>Products</span>
                                </div>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                    activeTab === 'products' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
                                }`}>
                                    384
                                </span>
                            </button>

                            <button
                                onClick={() => { setActiveTab('customers'); setSidebarOpen(false); }}
                                className={`w-full flex items-center gap-x-3 px-4 py-3 rounded text-sm font-semibold transition-all ${
                                    activeTab === 'customers'
                                        ? 'bg-primary text-white shadow-sm'
                                        : 'text-gry hover:bg-gray-50 hover:text-primary'
                                }`}
                            >
                                <Users size={18} />
                                <span>Customers</span>
                            </button>

                            <button
                                onClick={() => { setActiveTab('analytics'); setSidebarOpen(false); }}
                                className={`w-full flex items-center gap-x-3 px-4 py-3 rounded text-sm font-semibold transition-all ${
                                    activeTab === 'analytics'
                                        ? 'bg-primary text-white shadow-sm'
                                        : 'text-gry hover:bg-gray-50 hover:text-primary'
                                }`}
                            >
                                <TrendingUp size={18} />
                                <span>Analytics</span>
                            </button>

                            <button
                                onClick={() => { setActiveTab('profile'); setSidebarOpen(false); }}
                                className={`w-full flex items-center gap-x-3 px-4 py-3 rounded text-sm font-semibold transition-all ${
                                    activeTab === 'profile'
                                        ? 'bg-primary text-white shadow-sm'
                                        : 'text-gry hover:bg-gray-50 hover:text-primary'
                                }`}
                            >
                                <User size={18} />
                                <span>Admin Profile</span>
                            </button>
                        </div>

                        {/* Quick Store Links */}
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <h5 className="text-xs font-bold text-gry uppercase tracking-wider mb-3">Store Shortcuts</h5>
                            <ul className="space-y-2 text-sm text-gry">
                                <li>
                                    <Link to="/shop" className="hover:text-primary transition-colors flex items-center justify-between">
                                        <span>Shop Catalog</span>
                                        <ArrowUpRight size={14} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cart" className="hover:text-primary transition-colors flex items-center justify-between">
                                        <span>Shopping Cart</span>
                                        <ArrowUpRight size={14} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:text-primary transition-colors flex items-center justify-between">
                                        <span>Store Homepage</span>
                                        <ArrowUpRight size={14} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 min-w-0">
                        {/* Header Greeting & Controls */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 bg-white p-6 border border-gray-200 rounded">
                            <div>
                                <h1 className="text-2xl lg:text-3xl font-bold text-primary">
                                    {activeTab === 'overview' && 'Store Dashboard'}
                                    {activeTab === 'orders' && 'Order Management'}
                                    {activeTab === 'products' && 'Product Inventory'}
                                    {activeTab === 'customers' && 'Customer Directory'}
                                    {activeTab === 'analytics' && 'Sales & Growth Analytics'}
                                    {activeTab === 'profile' && 'Administrator Profile'}
                                </h1>
                                <p className="text-sm text-gry mt-1">
                                    Welcome back, Sohel! Here is your latest store activity and performance summary.
                                </p>
                            </div>
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <select
                                    value={timeframe}
                                    onChange={(e) => setTimeframe(e.target.value)}
                                    className="bg-gray-50 border border-gray-200 rounded px-3 py-2 text-xs font-semibold text-primary outline-none focus:border-primary"
                                >
                                    <option value="weekly">This Week</option>
                                    <option value="monthly">This Month</option>
                                    <option value="yearly">This Year</option>
                                </select>
                                <button
                                    onClick={() => alert('New product creation form is ready to connect with your database.')}
                                    className="flex items-center gap-1.5 bg-primary text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded hover:bg-black transition-colors shrink-0"
                                >
                                    <Plus size={15} /> Add Product
                                </button>
                            </div>
                        </div>

                        {/* TAB 1: OVERVIEW */}
                        {activeTab === 'overview' && (
                            <div className="space-y-8">
                                {/* 4 KPI Overview Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                                    {stats.map((stat, index) => {
                                        const IconComponent = stat.icon
                                        return (
                                            <div
                                                key={index}
                                                className="bg-white p-6 border border-gray-200 rounded hover:shadow-md transition-shadow"
                                            >
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-sm font-semibold text-gry">{stat.title}</span>
                                                    <div className={`p-2.5 rounded-lg border ${stat.color}`}>
                                                        <IconComponent size={20} />
                                                    </div>
                                                </div>
                                                <div className="flex items-baseline gap-2 mb-2">
                                                    <span className="text-2xl lg:text-3xl font-bold text-primary">
                                                        {stat.value}
                                                    </span>
                                                    <span className="inline-flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                                                        {stat.change}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-gry">{stat.description}</p>
                                            </div>
                                        )
                                    })}
                                </div>

                                {/* Analytics Chart & Category Breakdown */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {/* Monthly Revenue Bar Chart */}
                                    <div className="lg:col-span-2 bg-white p-6 border border-gray-200 rounded">
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
                                            <div>
                                                <h3 className="text-lg font-bold text-primary">Sales & Revenue Analytics</h3>
                                                <p className="text-xs text-gry">Monthly gross revenue comparison for 2026</p>
                                            </div>
                                            <div className="flex items-center gap-4 text-xs font-semibold">
                                                <span className="flex items-center gap-1.5 text-primary">
                                                    <span className="w-3 h-3 bg-primary rounded-sm inline-block"></span>
                                                    Revenue ($)
                                                </span>
                                                <span className="text-emerald-600 font-bold">
                                                    Average: $40.5k/mo
                                                </span>
                                            </div>
                                        </div>

                                        {/* CSS / SVG Bar Chart */}
                                        <div className="h-64 flex items-end justify-between gap-2 pt-6 pb-2 border-b border-gray-100">
                                            {monthlyData.map((item, index) => {
                                                const heightPercent = Math.round((item.revenue / maxRevenue) * 100)
                                                const isCurrentMonth = item.month === 'Nov'
                                                return (
                                                    <div key={index} className="flex-1 flex flex-col items-center group relative h-full justify-end">
                                                        {/* Tooltip on hover */}
                                                        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute -top-12 bg-black text-white text-[11px] py-1 px-2 rounded pointer-events-none whitespace-nowrap z-20 shadow-lg">
                                                            <div className="font-bold">${item.revenue.toLocaleString()}</div>
                                                            <div className="text-gray-300">{item.orders} orders</div>
                                                        </div>

                                                        {/* Bar */}
                                                        <div
                                                            style={{ height: `${heightPercent}%` }}
                                                            className={`w-full rounded-t transition-all duration-300 group-hover:opacity-80 ${
                                                                isCurrentMonth ? 'bg-primary shadow-sm' : 'bg-gray-200'
                                                            }`}
                                                        ></div>
                                                        <span className={`text-[11px] font-semibold mt-2 ${
                                                            isCurrentMonth ? 'text-primary font-bold' : 'text-gry'
                                                        }`}>
                                                            {item.month}
                                                        </span>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                        <div className="mt-4 flex items-center justify-between text-xs text-gry">
                                            <span>Lowest: Jan ($28.4k)</span>
                                            <span>Current: Nov ($48.2k)</span>
                                            <span>Projected Dec: $52.1k</span>
                                        </div>
                                    </div>

                                    {/* Sales By Category */}
                                    <div className="bg-white p-6 border border-gray-200 rounded flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-lg font-bold text-primary mb-1">Sales by Category</h3>
                                            <p className="text-xs text-gry mb-6">Percentage share of total gross revenue</p>

                                            <div className="space-y-4">
                                                {categoryStats.map((cat, idx) => (
                                                    <div key={idx}>
                                                        <div className="flex justify-between text-xs font-semibold mb-1.5">
                                                            <span className="text-primary">{cat.name}</span>
                                                            <span className="text-gry">{cat.amount} ({cat.percent}%)</span>
                                                        </div>
                                                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                                            <div
                                                                className={`h-full rounded-full ${cat.color}`}
                                                                style={{ width: `${cat.percent}%` }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-gray-100 bg-[#f9fafb] p-3 rounded text-center">
                                            <p className="text-xs text-gry">Top performing category this month:</p>
                                            <p className="text-sm font-bold text-primary mt-0.5">Electronics (+$4,210 vs target)</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Recent Orders & Customer Activity Grid */}
                                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                                    {/* Recent Orders Table (2 Cols) */}
                                    <div className="xl:col-span-2 bg-white border border-gray-200 rounded p-6">
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                                            <div>
                                                <h3 className="text-lg font-bold text-primary">Recent Orders</h3>
                                                <p className="text-xs text-gry">Latest purchases completed by customers</p>
                                            </div>
                                            <button
                                                onClick={() => setActiveTab('orders')}
                                                className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                                            >
                                                View all orders <ChevronRight size={14} />
                                            </button>
                                        </div>

                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left text-sm">
                                                <thead>
                                                    <tr className="border-b border-gray-100 text-xs font-bold text-gry uppercase tracking-wider">
                                                        <th className="pb-3">Order ID</th>
                                                        <th className="pb-3">Customer</th>
                                                        <th className="pb-3">Amount</th>
                                                        <th className="pb-3">Status</th>
                                                        <th className="pb-3 text-right">Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {orders.slice(0, 5).map((order) => (
                                                        <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                                            <td className="py-3.5 font-bold text-primary">{order.id}</td>
                                                            <td className="py-3.5">
                                                                <div className="font-semibold text-primary">{order.customer}</div>
                                                                <div className="text-xs text-gry truncate max-w-40">{order.items}</div>
                                                            </td>
                                                            <td className="py-3.5 font-bold text-primary">${order.amount.toFixed(2)}</td>
                                                            <td className="py-3.5">
                                                                <span className={`inline-block px-2.5 py-1 rounded text-xs font-bold border ${getStatusBadge(order.status)}`}>
                                                                    {order.status}
                                                                </span>
                                                            </td>
                                                            <td className="py-3.5 text-right text-xs text-gry">{order.date}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Customer Activity Feed (1 Col) */}
                                    <div className="bg-white border border-gray-200 rounded p-6">
                                        <h3 className="text-lg font-bold text-primary mb-1">Live Activity Feed</h3>
                                        <p className="text-xs text-gry mb-6">Real-time actions in your store</p>

                                        <div className="space-y-5">
                                            {activities.map((act, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                                                        {act.type === 'order' && <ShoppingBag size={14} />}
                                                        {act.type === 'user' && <User size={14} />}
                                                        {act.type === 'review' && <CheckCircle2 size={14} className="text-emerald-600" />}
                                                        {act.type === 'payment' && <DollarSign size={14} className="text-blue-600" />}
                                                        {act.type === 'support' && <Clock size={14} className="text-amber-600" />}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-xs font-bold text-primary">{act.user}</p>
                                                        <p className="text-xs text-gry truncate">{act.action}</p>
                                                        <span className="text-[10px] text-gray-400 mt-0.5 block">{act.time}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Top Selling Products Table */}
                                <div className="bg-white border border-gray-200 rounded p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <h3 className="text-lg font-bold text-primary">Top Selling Products</h3>
                                            <p className="text-xs text-gry">Best performing inventory by order count and revenue</p>
                                        </div>
                                        <Link
                                            to="/shop"
                                            className="text-xs font-bold uppercase tracking-wider text-primary hover:underline"
                                        >
                                            View in store →
                                        </Link>
                                    </div>

                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-sm">
                                            <thead>
                                                <tr className="border-b border-gray-100 text-xs font-bold text-gry uppercase tracking-wider">
                                                    <th className="pb-3">Product Name</th>
                                                    <th className="pb-3">Category</th>
                                                    <th className="pb-3">Units Sold</th>
                                                    <th className="pb-3">Stock Remaining</th>
                                                    <th className="pb-3 text-right">Total Revenue</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {topProducts.map((prod, idx) => (
                                                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                        <td className="py-3.5 font-bold text-primary">{prod.name}</td>
                                                        <td className="py-3.5 text-gry text-xs">{prod.category}</td>
                                                        <td className="py-3.5 font-semibold text-primary">{prod.sales}</td>
                                                        <td className="py-3.5">
                                                            <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
                                                                prod.stock < 20 ? 'bg-amber-50 text-amber-700' : 'bg-gray-100 text-gray-700'
                                                            }`}>
                                                                {prod.stock} in stock
                                                            </span>
                                                        </td>
                                                        <td className="py-3.5 text-right font-bold text-primary">{prod.revenue}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* TAB 2: ALL ORDERS */}
                        {activeTab === 'orders' && (
                            <div className="bg-white border border-gray-200 rounded p-6">
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                                    <div className="relative w-full md:w-72">
                                        <input
                                            type="text"
                                            placeholder="Search by ID, customer, item..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded text-sm outline-none focus:border-primary"
                                        />
                                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gry" />
                                    </div>

                                    <div className="flex items-center gap-2 w-full md:w-auto">
                                        <span className="text-xs text-gry font-semibold flex items-center gap-1">
                                            <Filter size={14} /> Status:
                                        </span>
                                        <select
                                            value={statusFilter}
                                            onChange={(e) => setStatusFilter(e.target.value)}
                                            className="border border-gray-200 rounded px-3 py-1.5 text-xs font-semibold text-primary outline-none focus:border-primary"
                                        >
                                            <option value="all">All Orders</option>
                                            <option value="completed">Completed</option>
                                            <option value="processing">Processing</option>
                                            <option value="pending">Pending</option>
                                            <option value="cancelled">Cancelled</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm">
                                        <thead>
                                            <tr className="bg-gray-50 text-xs font-bold text-gry uppercase tracking-wider">
                                                <th className="py-3 px-4">Order ID</th>
                                                <th className="py-3 px-4">Customer</th>
                                                <th className="py-3 px-4">Items</th>
                                                <th className="py-3 px-4">Date</th>
                                                <th className="py-3 px-4">Amount</th>
                                                <th className="py-3 px-4">Status</th>
                                                <th className="py-3 px-4 text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {filteredOrders.length === 0 ? (
                                                <tr>
                                                    <td colSpan="7" className="py-8 text-center text-gry">
                                                        No orders matching your criteria.
                                                    </td>
                                                </tr>
                                            ) : (
                                                filteredOrders.map((order) => (
                                                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                                        <td className="py-4 px-4 font-bold text-primary">{order.id}</td>
                                                        <td className="py-4 px-4">
                                                            <div className="font-semibold text-primary">{order.customer}</div>
                                                            <div className="text-xs text-gry">{order.email}</div>
                                                        </td>
                                                        <td className="py-4 px-4 text-xs text-gry max-w-xs">{order.items}</td>
                                                        <td className="py-4 px-4 text-xs text-gry">{order.date}</td>
                                                        <td className="py-4 px-4 font-bold text-primary">${order.amount.toFixed(2)}</td>
                                                        <td className="py-4 px-4">
                                                            <span className={`inline-block px-2.5 py-1 rounded text-xs font-bold border ${getStatusBadge(order.status)}`}>
                                                                {order.status}
                                                            </span>
                                                        </td>
                                                        <td className="py-4 px-4 text-right">
                                                            <button
                                                                onClick={() => alert(`Viewing details for ${order.id} (${order.customer})`)}
                                                                className="text-xs font-bold text-primary hover:underline px-2 py-1 border border-gray-200 rounded hover:bg-gray-50"
                                                            >
                                                                Details
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* TAB 3: PRODUCTS INVENTORY */}
                        {activeTab === 'products' && (
                            <div className="bg-white border border-gray-200 rounded p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-primary">Store Product Catalog</h3>
                                        <p className="text-xs text-gry">Overview of all active store inventory items</p>
                                    </div>
                                    <Link
                                        to="/shop"
                                        className="bg-primary text-white text-xs font-bold px-4 py-2 rounded hover:bg-black uppercase tracking-wider"
                                    >
                                        Visit Shop
                                    </Link>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {topProducts.map((p, i) => (
                                        <div key={i} className="border border-gray-200 rounded p-4 hover:shadow-md transition-shadow">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs font-semibold px-2 py-0.5 bg-gray-100 rounded text-gry">{p.category}</span>
                                                <span className="text-xs font-bold text-emerald-600">{p.stock} in stock</span>
                                            </div>
                                            <h4 className="font-bold text-base text-primary mb-1">{p.name}</h4>
                                            <div className="flex justify-between items-center text-xs text-gry mt-3 pt-3 border-t border-gray-100">
                                                <span>Total Units Sold: <strong>{p.sales}</strong></span>
                                                <span className="font-bold text-primary text-sm">{p.revenue}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* TAB 4: CUSTOMERS */}
                        {activeTab === 'customers' && (
                            <div className="bg-white border border-gray-200 rounded p-6">
                                <h3 className="text-lg font-bold text-primary mb-1">Customer Directory</h3>
                                <p className="text-xs text-gry mb-6">3,892 Registered shoppers in your store database</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {orders.map((ord, idx) => (
                                        <div key={idx} className="border border-gray-200 rounded p-4 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-primary">
                                                    {ord.customer.charAt(0)}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-sm text-primary">{ord.customer}</h4>
                                                    <p className="text-xs text-gry">{ord.email}</p>
                                                    <span className="text-[11px] text-gray-400">Total Spent: ${ord.amount.toFixed(2)}</span>
                                                </div>
                                            </div>
                                            <span className="text-xs font-semibold px-2 py-1 bg-emerald-50 text-emerald-700 rounded border border-emerald-200">
                                                Active
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* TAB 5: ANALYTICS */}
                        {activeTab === 'analytics' && (
                            <div className="space-y-6">
                                <div className="bg-white border border-gray-200 rounded p-6">
                                    <h3 className="text-lg font-bold text-primary mb-2">Key Performance Indicators (KPIs)</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
                                        <div className="border border-gray-100 bg-[#fafafa] p-4 rounded text-center">
                                            <p className="text-xs text-gry">Average Order Value (AOV)</p>
                                            <h4 className="text-2xl font-bold text-primary mt-1">$44.80</h4>
                                            <span className="text-xs text-emerald-600 font-semibold">+4.2% vs last month</span>
                                        </div>
                                        <div className="border border-gray-100 bg-[#fafafa] p-4 rounded text-center">
                                            <p className="text-xs text-gry">Store Conversion Rate</p>
                                            <h4 className="text-2xl font-bold text-primary mt-1">3.42%</h4>
                                            <span className="text-xs text-emerald-600 font-semibold">+0.6% vs industry benchmark</span>
                                        </div>
                                        <div className="border border-gray-100 bg-[#fafafa] p-4 rounded text-center">
                                            <p className="text-xs text-gry">Repeat Customer Rate</p>
                                            <h4 className="text-2xl font-bold text-primary mt-1">28.5%</h4>
                                            <span className="text-xs text-emerald-600 font-semibold">+5.1% this quarter</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* TAB 6: ADMIN PROFILE */}
                        {activeTab === 'profile' && (
                            <div className="bg-white border border-gray-200 rounded p-6 lg:p-8">
                                <h3 className="text-xl font-bold text-primary mb-1">Administrator Profile</h3>
                                <p className="text-xs text-gry mb-8">Manage your personal credentials, contact info and admin permissions</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-primary uppercase mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            defaultValue="Sohel Rana"
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded text-sm outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-primary uppercase mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            defaultValue="mdsohelrana191807@gmail.com"
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded text-sm outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-primary uppercase mb-2">Phone Number</label>
                                        <input
                                            type="text"
                                            defaultValue="+880 1700 000000"
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded text-sm outline-none focus:border-primary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-primary uppercase mb-2">Role & Permissions</label>
                                        <input
                                            type="text"
                                            disabled
                                            defaultValue="Super Administrator (Full Access)"
                                            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded text-sm text-gry"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-bold text-primary uppercase mb-2">Store Address</label>
                                        <input
                                            type="text"
                                            defaultValue="575 Crescent Ave. Quakertown, PA 18951"
                                            className="w-full px-4 py-2.5 border border-gray-200 rounded text-sm outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-end gap-3">
                                    <button
                                        onClick={() => alert('Profile changes saved successfully!')}
                                        className="bg-primary text-white font-bold text-xs uppercase tracking-wider py-3 px-8 rounded hover:bg-black transition-colors"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Dashboard
