import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
    HeartPulse,
    Croissant,
    Beef,
    Scissors,
    Coffee,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function UseCases() {
    const sectors = [
        {
            id: 'boucherie',
            icon: <Beef className="w-8 h-8 text-red-400" />,
            title: "Boucheries & Charcuteries",
            color: "bg-red-500/20",
            description: "Le week-end, la file d'attente sort sur le trottoir. Les clients s'impatientent et de potentiels acheteurs passent leur chemin.",
            benefits: [
                "Finis les tickets papiers perdus ou graisseux",
                "Affiche numérique claire du numéro servi",
                "Le client peut faire ses achats chez le primeur en attendant"
            ]
        },
        {
            id: 'boulangerie',
            icon: <Croissant className="w-8 h-8 text-yellow-400" />,
            title: "Boulangeries & Pâtisseries",
            color: "bg-yellow-500/20",
            description: "Aux heures de pointe (le matin et midi), la queue est stressante pour vos équipes qui veulent servir tout le monde rapidement.",
            benefits: [
                "Gestion fluide avec multi-vendeurs",
                "Moins de brouhaha dans la boutique = moins d'erreurs",
                "Augmentation des ventes croisées (café, journal à côté)"
            ]
        },
        {
            id: 'pharmacie',
            icon: <HeartPulse className="w-8 h-8 text-green-400" />,
            title: "Pharmacies & Para",
            color: "bg-green-500/20",
            description: "La confidentialité est essentielle. Un patient ne veut pas forcément que tout le monde écoute ses maux au comptoir.",
            benefits: [
                "Respect total du secret médical (espacement naturel)",
                "Les patients âgés ou malades peuvent patienter assis ou en voiture",
                "Un environnement plus sain lors des épidémies hivernales"
            ]
        },
        {
            id: 'coiffeur',
            icon: <Scissors className="w-8 h-8 text-indigo-400" />,
            title: "Coiffeurs & Barbiers sans rdv",
            color: "bg-indigo-500/20",
            description: "Les clients qui attendent 45 min sans rien faire finissent par abandonner ou se plaindre.",
            benefits: [
                "Temps d'attente utilisé intelligemment par le client",
                "Moins de pression visuelle sur vos coiffeurs",
                "SMS d'alerte quand le fauteuil est prêt !"
            ]
        },
        {
            id: 'foodtruck',
            icon: <Coffee className="w-8 h-8 text-orange-400" />,
            title: "Food Trucks & Restauration Rapide",
            color: "bg-orange-500/20",
            description: "Lors des festivals ou au bord de la route, l'espace d'attente est restreint voire inexistant.",
            benefits: [
                "Les clients commandent et partent se promener",
                "Retrait ultra-efficace une fois la préparation terminée",
                "Image moderne et dynamique pour votre stand"
            ]
        }
    ];

    return (
        <>
            <Helmet>
                <title>Secteurs & Métiers - QRPass</title>
                <meta name="description" content="Découvrez comment QRPass s'adapte à votre métier: boucherie, boulangerie, pharmacie, coiffeur, foodtruck et autres." />
            </Helmet>
            <section className="pt-32 pb-16 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/30 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        QRPass s'adapte à <span className="text-gradient">votre métier</span>
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-xl text-slate-400 max-w-3xl mx-auto"
                    >
                        Que vous soyez artisan, professionnel de santé ou restaurateur, si vos clients doivent attendre sur place, cette solution est pour vous.
                    </motion.p>
                </div>
            </section>

            <section className="py-16 md:py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {sectors.map((sector, idx) => (
                            <motion.div
                                key={sector.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`glass-card p-8 group ${idx === sectors.length - 1 ? 'lg:col-span-2' : ''}`}
                            >
                                <div className="flex items-start gap-6">
                                    <div className={`w-16 h-16 rounded-2xl ${sector.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                        {sector.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-3">{sector.title}</h3>
                                        <p className="text-slate-400 mb-6 italic border-l-2 border-white/10 pl-4 py-1">
                                            {sector.description}
                                        </p>
                                        <ul className="space-y-3">
                                            {sector.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-300">
                                                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 bg-[var(--color-dark-surface)] border-y border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand/5 to-transparent -z-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Votre secteur n'est pas listé ?</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        QRPass s'adapte à n'importe quelle situation où une file d'attente se forme.
                        Testez par vous-même :
                    </p>
                    <div className="flex gap-4 justify-center items-center flex-wrap">
                        <Link to="/contact" className="px-8 py-4 glass-card hover:bg-white/10 text-white rounded-xl font-medium text-lg transition-all flex items-center justify-center cursor-pointer">
                            Nous contacter
                        </Link>
                        <Link to="/tarifs" className="px-8 py-4 bg-gradient-to-r from-brand to-accent hover:opacity-90 text-white rounded-xl font-bold text-lg shadow-lg shadow-brand/25 transition-all flex items-center justify-center gap-2 cursor-pointer">
                            Voir les tarifs
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
