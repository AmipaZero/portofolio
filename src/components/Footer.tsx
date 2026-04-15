
"use client";

import {
  Footer,
  // FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  // FooterLink,
  // FooterLinkGroup,
  // FooterTitle,
} from "flowbite-react";
import { BsGithub, BsInstagram,BsLinkedin  } from "react-icons/bs";
// import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function AppFooter() {
  return (
    <Footer container
  className="mt-0 text-lg !rounded-none bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            {/* <FooterBrand */}
              {/* href="https://" */}
              {/* src="https://flowbite.com/docs/images/logo.svg" */}
              {/* alt="Flowbite Logo" */}
              {/* name="Flowbite" */}
            {/* /> */}
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              {/* <FooterTitle title="about" /> */}
              {/* <FooterLinkGroup col> */}
                {/* <FooterLink href="#">Flowbite</FooterLink> */}
                {/* <FooterLink href="#">Tailwind CSS</FooterLink> */}
              {/* </FooterLinkGroup> */}
            </div>
            <div>
              {/* <FooterTitle title="Follow us" /> */}
              {/* <FooterLinkGroup col> */}
                {/* <FooterLink href="#">Github</FooterLink> */}
                {/* <FooterLink href="#">Discord</FooterLink> */}
              {/* </FooterLinkGroup> */}
            </div>
            <div>
              {/* <FooterTitle title="Legal" /> */}
              {/* <FooterLinkGroup col> */}
                {/* <FooterLink href="#">Privacy Policy</FooterLink> */}
                {/* <FooterLink href="#">Terms &amp; Conditions</FooterLink> */}
              {/* </FooterLinkGroup> */}
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="" year={2026} />
          {/* <FooterCopyright href="#" by="Amipa Umadiniah" year={2026} /> */}
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {/* <FooterIcon href="#" icon={BsFacebook} /> */}
            <FooterIcon href="https://instagram.com/umadiniah" icon={BsInstagram} />
            <FooterIcon href="https://www.linkedin.com/in/amipa-umadiniah-074a8838a" icon={BsLinkedin} />
            {/* <FooterIcon href="#" icon={BsTwitter} /> */}
            <FooterIcon href="https://github.com/AmipaZero" icon={BsGithub} />
            {/* <FooterIcon href="#" icon={BsDribbble} /> */}
          </div>
        </div>
      </div>
    </Footer>
  );
}
