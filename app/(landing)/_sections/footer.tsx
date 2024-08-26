import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-yellow-500 text-gray-900 py-16 w-full">
            <div className="container mx-auto text-center">
                <p className="text-lg font-bold mb-4">© 2024 Verbalizelt. All rights reserved.</p>
                <div className="flex justify-center space-x-8 text-lg mb-8">
                    <a href="#" className="hover:text-gray-700">Home</a>
                    <a href="#" className="hover:text-gray-700">About</a>
                    <a href="#" className="hover:text-gray-700">Customers</a>
                    <a href="#" className="hover:text-gray-700">Contact</a>
                    <a href="#" className="hover:text-gray-700">Pricing</a>
                </div>
                {/* Logos de téléchargement ajoutés ici */}
                <div className="flex justify-center gap-6">
                    <Link href="/" className="cursor-pointer">
                        <Image
                            src={"/appstore-badge.svg"}
                            alt="App Store Badge"
                            width={120}
                            height={50}
                        />
                    </Link>
                    <Link href="/" className="cursor-pointer">
                        <Image
                            src={"/googleplay-badge.svg"}
                            alt="Google Play Badge"
                            width={120}
                            height={50}
                        />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
