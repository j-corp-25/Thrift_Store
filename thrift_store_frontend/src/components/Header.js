import React from 'react'
import "./Header.css"
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className='header-container'>
        <div className='header-navigation'>
        <a href="/home">{t('home')}</a>
        <a href="/faq">{t('faq')}</a>
        </div>

        <div className='header-title'>{t('shopTitle')}</div>
        <div className='header-message'>{t('headerMessage')}</div>
        <div className='header-submessage'>{t('headerSubMessage')}</div>


    </div>
  )
}

export default Header
