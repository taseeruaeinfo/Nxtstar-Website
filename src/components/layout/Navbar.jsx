import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaGlobe } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/Navbar.css';
import logo from '../../assets/images/logo.png';

const LANGUAGES = [
  { code: 'en', label: 'English',  flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch',  flag: '🇩🇪' },
  { code: 'hi', label: 'हिन्दी',    flag: '🇮🇳' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'pl', label: 'Polski',   flag: '🇵🇱' },
  { code: 'ru', label: 'Русский',  flag: '🇷🇺' },
  { code: 'ar', label: 'العربية',  flag: '🇦🇪' },
];

const switchLanguage = (code) => {
  if (code === 'en') {
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;
  } else {
    document.cookie = `googtrans=/auto/${code}`;
    document.cookie = `googtrans=/auto/${code}; domain=${window.location.hostname}`;
  }
  window.location.reload();
};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [activeLang, setActiveLang] = useState('en');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        {
            name: 'Business Setup',
            path: '/business',
            dropdownItems: [
                { name: 'Mainland', path: '/business/mainland' },
                { name: 'Freezone', path: '/business/freezone' },
                { name: 'Offshore', path: '/business/offshore' }
            ]
