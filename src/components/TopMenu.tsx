import styles from '@/components/topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Link from 'next/link';
import { ClassNames } from '@emotion/react';
import getUserProfile from '@/libs/getUserProfile';

export default async function TopMenu(){

    const session = await getServerSession(authOptions)

    var profile;

    if (session) {
        profile = await getUserProfile(session.user.token)
    }
    
    
    return(
        <div className={styles.menucontainer}>
            <Link href='/' >
                    <div className='flex items-center  h-[70%] px-2 py-2 rounded-lg 
                     text-indigo-600 hover:text-indigo-500 bg-blue-200 hover:bg-sky-200 text-sm
                     flex-start top-2 mx-2 hover:underline' >
                        Home
                    </div>
                </Link>
            {
                session?
                <>
                    <Link href='/api/auth/signout'>
                        <div className='flex items-center  h-[70%] px-2 py-2 rounded-lg 
                        text-indigo-500 hover:text-indigo-500 bg-cyan-200 hover:bg-cyan-100 text-sm
                        left-10 top-2'>
                            Sign Out of {profile.data.name}
                        </div>
                    </Link>
                    <Link href='/mybooking' >
                        <div className='flex items-center  h-[70%] px-2 py-2 rounded-lg 
                        text-indigo-500 hover:text-indigo-500 bg-cyan-200 hover:bg-cyan-100 text-sm
                        flex-start top-2 mx-2 hover:underline'>
                            My Booking
                        </div>
                    </Link>
                    <div className='absolute right-20'>
                        <TopMenuItem title='Booking' pageRef='/booking'/>
                    </div>
                </>
                :(
                    <> 
                        <Link href='api/auth/signin' >
                            <div id='sigin-button' className='flex items-center  h-[70%] px-2 py-2 rounded-lg 
                            text-indigo-500 hover:text-indigo-500 bg-cyan-200 hover:bg-cyan-100 text-sm
                            left-10 top-2 mx-2' >
                                Sign in 
                            </div>
                        </Link>
                            <Link href='/register' >
                            <div id='sigin-button' className='flex items-center  h-[70%] px-2 py-2 rounded-lg 
                            text-indigo-500 hover:text-indigo-500 bg-cyan-200 hover:bg-cyan-100 text-sm
                            left-10 top-2' >
                                Register
                            </div>
                        </Link>
                    </>
                )

            }            
            <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo' 
            width={0} height={0} sizes='100vh'/>
        </div>
    );
}