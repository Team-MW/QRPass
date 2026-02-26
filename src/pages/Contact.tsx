import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Contactez-nous - QRPass</title>
                <meta name="description" content="Une question, un besoin spécifique ? Contactez l'équipe QRPass pour gérer vos files d'attente intelligemment." />
            </Helmet>
            <section className="pt-32 pb-16 relative">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand/30 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Nous <span className="text-gradient">Contacter</span>
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-xl text-slate-400 max-w-3xl mx-auto"
                    >
                        Une question ? Un projet spécifique ? Notre équipe est basée en France et vous répondra très rapidement.
                    </motion.p>
                </div>
            </section>

            <section className="py-16 pb-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Parlons de votre boutique</h2>
                                <p className="text-slate-400">
                                    Remplissez le formulaire ci-contre pour programmer une démonstration ou poser vos questions techniques.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                                        <Mail className="w-6 h-6 text-brand-light" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Email</h4>
                                        <a href="mailto:bonjour@qrpass.fr" className="text-slate-400 hover:text-white transition-colors">
                                            bonjour@qrpass.fr
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                                        <Phone className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Téléphone</h4>
                                        <p className="text-slate-400">01 80 00 00 00 (Lundi au Samedi)</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                                        <MapPin className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Bureaux</h4>
                                        <p className="text-slate-400">10 rue de la République, 75011 Paris</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card p-6 border-brand/20">
                                <p className="text-slate-300 text-sm">
                                    "L'équipe commerciale est top ! Elle a pris le temps de venir voir la configuration de ma boucherie avant de me proposer le matériel adapté."
                                    <br /><br />
                                    <strong className="text-brand-light">— Martin J, Boucher artisan.</strong>
                                </p>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <form className="glass-card p-8 border border-white/10 space-y-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-[80px] -z-10"></div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Prénom</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-light focus:ring-1 focus:ring-brand-light/50 transition-all placeholder:text-slate-600"
                                            placeholder="Jean"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Nom</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-light focus:ring-1 focus:ring-brand-light/50 transition-all placeholder:text-slate-600"
                                            placeholder="Dupont"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Email professionnel</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-light focus:ring-1 focus:ring-brand-light/50 transition-all placeholder:text-slate-600"
                                        placeholder="jean.dupont@boutique.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Quel Commerce ?</label>
                                    <select
                                        className="w-full bg-[var(--color-dark-surface)] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-light focus:ring-1 focus:ring-brand-light/50 transition-all"
                                    >
                                        <option value="">Sélectionnez...</option>
                                        <option value="boucherie">Boucherie / Charcuterie</option>
                                        <option value="boulangerie">Boulangerie / Pâtisserie</option>
                                        <option value="pharmacie">Pharmacie</option>
                                        <option value="foodtruck">Food Truck / Restauration rapide</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-light focus:ring-1 focus:ring-brand-light/50 transition-all placeholder:text-slate-600 resize-none"
                                        placeholder="Parlez-nous de vos besoins en terme de file d'attente..."
                                    ></textarea>
                                </div>

                                <button
                                    type="button"
                                    className="w-full py-4 bg-gradient-to-r from-brand to-accent hover:opacity-90 text-white rounded-xl font-bold transition-all shadow-lg shadow-brand/25 cursor-pointer flex items-center justify-center gap-2 mt-4"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Envoyer le message
                                    <Send size={18} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
