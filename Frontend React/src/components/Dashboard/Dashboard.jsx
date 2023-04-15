import React from 'react';
import { FaHome, FaChartLine, FaCalendarAlt, FaCog } from 'react-icons/fa';
import { Navbar } from '../navbar/Navbar';
import './dashboard.css';
import  Pfm from '../Pfm/Pfm'
import Credit from '../CreditCard/Credit';
import Analytics from '../Analytics/Analytics';
import Post from '../Post/Post';

const Dashboard = () => {
    const [activeTab, setActiveTab] = React.useState('home');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const subscribers = 10000;
    const views = 1000000;
    const revenue = 50000;

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [settings, setSettings] = React.useState({
        notifications: true,
        newsletter: true,
        marketing: false,
    });

    const handleSettingsChange = (event) => {
        const { name, checked } = event.target;
        setSettings((prevSettings) => ({
            ...prevSettings,
            [name]: checked,
        }));
    };

    return (
        <div className="dashboard">
            <Navbar />
            <div className="tabs">
                <div
                    className={`tab ${activeTab === 'home' ? 'active' : ''}`}
                    onClick={() => handleTabClick('home')}
                >
                    <FaHome />
                    <span>Dashboard</span>
                </div>
                <div
                    className={`tab ${activeTab === 'analytics' ? 'active' : ''}`}
                    onClick={() => handleTabClick('analytics')}
                >
                    <FaChartLine />
                    <span>Analytics</span>
                </div>
                <div
                    className={`tab ${activeTab === 'pfm' ? 'active' : ''}`}
                    onClick={() => handleTabClick('pfm')}
                >
                    <FaChartLine />
                    <span>PFM</span>
                </div>
                <div
                    className={`tab ${activeTab === 'card' ? 'active' : ''}`}
                    onClick={() => handleTabClick('card')}
                >
                    <FaChartLine />
                    <span>Credit Card</span>
                </div>
                <div
                    className={`tab ${activeTab === 'schedule' ? 'active' : ''}`}
                    onClick={() => handleTabClick('schedule')}
                >
                    <FaCalendarAlt />
                    <span>Schedule</span>
                </div>
                <div
                    className={`tab ${activeTab === 'settings' ? 'active' : ''}`}
                    onClick={() => handleTabClick('settings')}
                >
                    <FaCog />
                    <span>Settings</span>
                </div>
            </div>
            <div className="content">
                {activeTab === 'home' && (
                    <div className="home-tab">
                        <h2>Welcome to your Creator Dashboard!</h2>
                        <p>Here you can see an overview of your subscription-based business.</p>
                        <div className="stats-container">
                            <div className="stat">
                                <h3>Subscribers</h3>
                                <span className="stat-value">{subscribers}</span>
                            </div>
                            <div className="stat">
                                <h3>Views</h3>
                                <span className="stat-value">{views}</span>
                            </div>
                            <div className="stat">
                                <h3>Monthly Revenue</h3>
                                <span className="stat-value">${revenue}</span>
                            </div>
                        </div>
                        <div className="chart-container">
                            <h3>Monthly Revenue</h3>
                            <img src="/revenue-chart.png" alt="Monthly Revenue Chart" />
                        </div>
                    </div>
                )}
                {activeTab === 'pfm' && (
                    <Pfm />
                )}
                 {activeTab === 'card' && (
                    <Credit/>
                )}
                {activeTab === 'analytics' && (
                    <div className="analytics-tab">
                       <Analytics/>
                    </div>
                )}
                {activeTab === 'schedule' && (
                    <div className="schedule-tab">
                       <Post/>
                    </div>
                )}
                {activeTab === 'settings' && (
                    <div className="settings-tab">
                        <h2>Settings</h2>
                        <div className="settings-container">
                            <h3>Notifications</h3>
                            <label>
                                <input
                                    type="checkbox"
                                    name="notifications"
                                    checked={settings.notifications}
                                    onChange={handleSettingsChange}
                                />
                                Send me notifications
                            </label>
                            <h3>Newsletter</h3>
                            <label>
                                <input
                                    type="checkbox"
                                    name="newsletter"
                                    checked={
                                        settings.newsletter
                                    }
                                    onChange={handleSettingsChange}
                                />
                                Subscribe to newsletter
                            </label>
                            <h3>Marketing</h3>
                            <label>
                                <input type="checkbox" name="marketing" checked={settings.marketing} onChange={handleSettingsChange} />
                                Allow marketing emails
                            </label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;