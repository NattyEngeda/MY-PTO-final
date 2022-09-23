import React from 'react'
import { Link } from 'react-router-dom'
import LinkNav from '../components/LinkNav'
import { Menu,Button } from '@mantine/core'

// Icons 
import {HiOutlineMenuAlt1} from 'react-icons/hi'

// Styles
import "../assets/styles/header.css"
export default function Header() {
    return (
        <header className=' flex flex-col bg-white'>
            <div className='relative'>
                <div className='hidden md:block h-16 bg-white'>
                </div>
                <div className='relative hidden md:block'>
                    <div className="wave">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>
                <div className='w-full fixed md:absolute md:top-10 left-0 flex flex-row justify-between px-5 md:px-2 xl:px-20 items-center py-4 bg-[#667AE1] md:bg-transparent z-30 bg-opacity-70 md:bg-opacity-100 md:backdrop-blur-none backdrop-blur-md shadow-md md:shadow-none'>
                    <div className='md:pl-10'>
                        <Link to='/' className='hidden md:block text-2xl md:text-3xl lg:text-4xl font-Singlet text-[#667AE1]'>Natty Engeda</Link>
                        <h1 className='block md:hidden text-3xl md:text-4xl font-Singlet text-white'>N</h1>
                    </div>
                    <div className='hidden md:flex flex-row md:gap-4 lg:gap-10 md:pr-2 lg:pr-10'>
                        <LinkNav name="Blog" link="/blog" />
                        <LinkNav name="Projects" link="/project" />
                        <LinkNav name="Contact" link="/contact" />
                    </div>
                    <div className='md:hidden border rounded-md  '>
                        <Menu
                        transition="pop"
                        shadow="md"
                        width={200}>
                        <Menu.Target>
                            <Button className='bg- text-primary-500 p-1'>
                                <HiOutlineMenuAlt1 className='w-8 h-8 text-white active:text-[#667AE1]'/>
                            </Button>
                        </Menu.Target>
                        <Menu.Dropdown
                        className='pr-10'
                        >
                            {/* <Menu.Label>Pages</Menu.Label> */}
                            <Menu.Item
                                className='active:bg-gray-300'
                                component={Link}
                                to='/'
                                >Home</Menu.Item>
                            <Menu.Item
                                className='active:bg-gray-300'
                                component={Link}
                                to='/blog'
                                >Blog</Menu.Item>
                            <Menu.Item
                                className='active:bg-gray-300'
                                component={Link}
                                to='/project'
                                >Projects</Menu.Item>
                            
                        </Menu.Dropdown>
                        </Menu>
                    </div>

                </div>
            </div>
        </header>
    )
}
