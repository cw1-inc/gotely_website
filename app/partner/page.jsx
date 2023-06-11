import HowItWorks from '@/components/partner/HIW'
import FormPartnerSign from '@/components/partner/form'
import HeroPartner from '@/components/partner/hero'
import Footer from '@/components/ui/footer'
import HeaderPartner from '@/components/ui/header_partner'
import React from 'react'




export default function Partners() {


    return (
        <section className="flex flex-col min-vh-screen justify-between">
            <HeaderPartner />
            <HeroPartner />
            <hr />
            <HowItWorks />
            <hr />
            <div className="w-full px-1 md:px-16 py-4 md:py-16" id="form">
                <h2 className="text-center text-2xl md:text-5xl font-medium text-slate-800 pb-4">Partner with us today</h2>
                <FormPartnerSign />
                
            </div>
            <Footer />

        </section>
    )
}