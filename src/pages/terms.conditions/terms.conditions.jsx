import React, { useEffect } from "react";

import Header from "../../components/organisms/header/header.component";
import Footer from "../../components/organisms/footer/footer.component";
import { useStore } from "../../store";
import { Helmet } from "react-helmet";

const TermsConditions = () => {
  const websiteContent = useStore((state) => state.websiteContent);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Easy Captcha Job | EarnEasy24 Money App | Earn With Captcha App
        </title>
        <meta
          name="description"
          content="Unlock effortless earnings with the Easy Captcha Job app! Start earning money effortlessly today. Join now and earn with Captcha."
        />
        <meta
          name="keywords"
          content="earn with captcha app, easy captcha job app, earn easy money app"
        />
      </Helmet>
      <Header headersData={[]} />

      <div className="pb-20 mt-36 lg:px-52 px-10">
        <div className="flex flex-col items-center py-4 text-deepBlue  ">
          <span className="text-40 lg:text-54 font-cunia">
            Terms and Conditions
          </span>
        </div>
        <div className="text-17 py-12">
          <p>
            <strong className="text-32 font-cunia text-deepBlue">
              Introduction
            </strong>
          </p>
          <br />

          <p>Welcome to Earneasy24.</p>
          <br />
          <p>
            Earneasy24 is among various types of captchas recognition firm that
            focuses on the speedy and reliable conversion of images to text and
            general digitization.
          </p>
          <br />
          <p>
            These Terms of Service (“Terms”, “Terms of Service”) govern your use
            of our website located at{" "}
            <a className="text-lightPink" href="https://www.earneasy24.com/">
              www.earneasy24.com
            </a>{" "}
            (together or individually “Service”) operated by Earneasy24 Our
            Privacy Policy also governs your use of our Service and explains how
            we collect, safeguard, and disclose information that results from
            your use of our web pages. Your agreement with us includes these
            Terms and our Privacy Policy (“Agreements”). You acknowledge that
            you have read and understood Agreements, and agree to be bound of
            them. If you do not agree with (or cannot comply with) Agreements,
            then you may not use the Service, but please let us know by emailing
            at {websiteContent?.email} so we can try to find a solution. These
            Terms apply to all visitors, users, and others who wish to access or
            use Service.
          </p>
          <br />
          <ol start="2">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Captcha Filling
              </strong>
            </li>
            <br />
          </ol>
          <p>
            1) Earneasy24 is not responsible for any type of fix earning. It
            depends on user's typing speed & how much time he/she will give to
            this work.
            <br />
            <br />
            2) Without informing to Earneasy24 if the user stops his work for
            more than 30 days or in 30 days if user cannot completes 75 Rs work
            then his account will be terminated forever without any prior
            notice and the security deposit will not be refunded; it will be converted into platform fees without refunds.
            <br />
            <br />
            3) Captcha can be between 2 to 12 characters long. Captchas are case
            sensitive and can contain special characters like (! @ # $ % ^ & *).
            <br />
            <br />
            4) There will be ads between captchas.
          </p>
          <br />
          <ol start="3">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Communications
              </strong>
            </li>
            <br />
          </ol>
          <p>
            By using our Service, you agree to subscribe to newsletters,
            marketing or promotional materials, and other information we may
            send. However, you may opt-out of receiving any, or all, of these
            communications from us by following the unsubscribe link or by
            emailing at{" "}
            <span className="text-lightPink">{websiteContent?.email}</span>
          </p>
          <br />
          <ol start="4">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Purchases
              </strong>
            </li>
            <br />
          </ol>
          <p>
            If you wish to purchase any product or service made available
            through Service (“Purchase”), you may be asked to supply certain
            information relevant to your Purchase including but not limited to,
            your credit or debit card number, the expiration date of your card,
            your billing address, and your shipping information. You represent
            and warrant that: (i) you have the legal right to use any card(s) or
            another payment method (s) in connection with any Purchase; and that
            (ii) the information you supply to us is true, correct, and
            complete. We may employ the use of third-party services for the
            purpose of facilitating payment and the completion of Purchases. By
            submitting your information, you grant us the right to provide the
            information to these third parties subject to our Privacy Policy. We
            reserve the right to refuse or cancel your order at any time for
            reasons including but not limited to product or service
            availability, errors in the description or price of the product or
            service, error in your order, or other reasons. We reserve the right
            to refuse or cancel your order if fraud or an unauthorized or
            illegal transaction is suspected.
          </p>
          <br />
          <ol start="5">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Contests, Sweepstakes, and Promotions
              </strong>
            </li>
            <br />
          </ol>
          <p>
            Any contests, sweepstakes or other promotions (collectively,
            “Promotions”) made available through Service may be governed by
            rules that are separate from these Terms of Service. If you
            participate in any Promotions, please review the applicable rules as
            well as our Privacy Policy. If the rules for a Promotion conflict
            with these Terms of Service, Promotion rules will apply.
          </p>
          <br />
          <ol start="6">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Entry Fee
              </strong>
            </li>
            <br />
          </ol>
          <p>
            Earneasy24 does not ask for any kind of subscription money, service
            fee, etc. We collect entry fee at the time of account creation which
            is refundable under certain terms provided below:-
          </p>
          <br />
          <ul>
            <li>
              <strong>
                <span className="text-lightPink">Silver</span>
              </strong>
              <br />
              <br /> Plan Account Holder shall earn a minimum amount of RS 35000
              to get the refund of the entry fee.
            </li>
            <br />
            <li>
              <strong>
                <span className="text-lightPink">Gold</span>
              </strong>
              <br />
              <br /> plan Account Holder shall earn a minimum amount of RS 35000
              to get the refund of the entry fee.
            </li>
            <br />
            <li>
              <strong>
                <span className="text-lightPink">Platinum</span>
              </strong>
              <br />
              <br /> Plan Account Holder shall earn a minimum amount of RS 35000
              to get the refund of the entry fee.
            </li>
            <br />
          </ul>
          <p>Note: Entry Fee is not refundable in any other circumstances.</p>
          <p>Note: We charge 20% Service charge.</p>
          <br />
          <ol start="7">
            <li>
              <strong>
                <span className="text-lightPink">Free Trial</span>
              </strong>
            </li>
            <br />
          </ol>
          <p>
            Earneasy24 may, at its sole discretion, offer a Subscription with a
            free trial for a limited period of time (“Free Trial”). You may be
            required to enter your billing information in order to sign up for
            Free Trial. If you do enter your billing information when signing up
            for Free Trial, you will not be charged by Earneasy24 until Free
            Trial has expired. On the last day of the Free Trial period, unless
            you canceled your Subscription, you will be automatically charged
            the applicable Subscription fees for the type of Subscription you
            have selected. At any time and without notice, Earneasy24 reserves
            the right to (i) modify Terms of Service of Free Trial offer, or
            (ii) cancel such Free Trial offer.
          </p>
          <br />
          <p>
            <strong className="text-24 font-cunia text-deepBlue">
              Service level agreement:
            </strong>
          </p>
          <br />
          <p>
            Even though customers/clients may submit unsupported images, and
            Earneasy24 will do its best effort to solve said images in a timely
            fashion, the service level agreement won’t cover any unsupported
            images. The work won’t be available during the maintenance of the
            application/website. Earneasy24 reserves the right to include
            unsupported images/captcha or choose to ignore or suspending at any
            time without previous notice.
          </p>
          <br />
          <ol start="8">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Fee Changes
              </strong>
            </li>
            <br />
          </ol>
          <p>
            Earneasy24, in its sole discretion and at any time, may modify
            Subscription fees for the Subscriptions. Any Subscription fee change
            will become effective at the end of the then-current Billing Cycle.
            Earneasy24 will provide you with reasonable prior notice of any
            change in Subscription fees to give you an opportunity to terminate
            your Subscription before such change becomes effective. Your
            continued use of Service after the Subscription fee change comes
            into effect constitutes your agreement to pay the modified
            Subscription fee amount.
          </p>
          <br />
          <ol start="9">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Refunds
              </strong>
            </li>
            <br />
          </ol>
          <p>
            Refunds are discretionary and not available at any
            circumstances.&nbsp;But in exceptional cases, we will refund your amount if you request the refund using the original payment method or request through the payment gateway. Subscribers are not allowed to change their
            plans. They can always upgrade their plan . When you terminate your
            agreement with us, the provisions relating to your liability on
            termination will apply.
          </p>
          <br />
          <ol start="10">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Content
              </strong>
            </li>
            <br />
          </ol>
          <p>
            The content found on or through this Service is the property of
            Earneasy24 or used with permission. You may not distribute, modify,
            transmit, reuse, download, repost, copy, or use said Content,
            whether in whole or in part, for commercial purposes or for personal
            gain, without express advance written permission from us.
          </p>
          <br />
          <ol start="11">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Prohibited Uses
              </strong>
            </li>
            <br />
          </ol>
          <p>
            you may use Service only for lawful purposes and in accordance with
            Terms. You agree not to use Service:
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.1.</span> In any way that
            violates any applicable national or international law or regulation.
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.2.</span> For the purpose of
            exploiting, harming, or attempting to exploit or harm minors in any
            way by exposing them to inappropriate content or otherwise.
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.3.</span> To transmit, or procure
            the sending of, any advertising or promotional material, including
            any “junk mail”, “chain letter,” “spam,” or any other similar
            solicitation.
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.4.</span> To impersonate or
            attempt to impersonate Company, a Company employee, another user, or
            any other person or entity.
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.5.</span> In any way that
            infringes upon the rights of others, or in any way is illegal,
            threatening, fraudulent, or harmful, or in connection with any
            unlawful, illegal, fraudulent, or harmful purpose or activity.
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.6.</span> To engage in any other
            conduct that restricts or inhibits anyone’s use or enjoyment of
            Service, or which, as determined by us, may harm or offend Company
            or users of Service or expose them to liability. Additionally, you
            agree not to:
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.7.</span> Use Service in any
            manner that could disable, overburden, damage, or impair Service or
            interfere with any other party’s use of Service, including their
            ability to engage in real-time activities through Service.
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.8.</span> Use any robot, spider,
            or another automatic device, process, or means to access Service for
            any purpose, including monitoring, copying any of the material on
            Service, using boat to fill captcha.
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.9.</span> Use any manual process
            to monitor or copy any of the material on Service or for any other
            unauthorized purpose without our prior written consent.
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.10.</span> Use any device,
            software, or routine that interferes with the proper working of
            Service.
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.11.</span> Introduce any viruses,
            trojan horses, worms, logic bombs, or other material which is
            malicious or technologically harmful.
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.12.</span> Attempt to gain
            unauthorized access to, interfere with, damage, or disrupt any parts
            of Service, the server on which Service is stored, or any server,
            computer, or database connected to Service.
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.13.</span> Attack Service via a
            denial-of-service attack or a distributed denial-of-service attack.
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.14.</span> Take any action that
            may damage or falsify the Company rating.
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.15.</span> Otherwise, attempt to
            interfere with the proper working of Service.
          </p>
          <br />
          <ol start="12">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Analytics
              </strong>
            </li>
            <br />
          </ol>
          <p>
            We may use third-party Service Providers to monitor and analyze the
            use of our Service.
          </p>
          <br />
          <ol start="13">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                No Use By Minors
              </strong>
            </li>
            <br />
          </ol>
          <p>
            Service is intended only for access and use by individuals at least
            eighteen (18) years old. By accessing or using Service, you warrant
            and represent that you are at least eighteen (18) years of age and
            with the full authority, right, and capacity to enter into this
            agreement and abide by all of the terms and conditions of Terms. If
            you are not at least eighteen (18) years old, you are prohibited
            from both the access and usage of Service.
          </p>
          <br />
          <ol start="14">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Accounts
              </strong>
            </li>
            <br />
          </ol>
          <p>
            The account holder has to earn a minimum amount of RS 100 each month
            to keep the account active, failure of doing the same shall lead to
            the account termination.
          </p>
          <br />
          <p>
            When you create an account with us, you guarantee that you are above
            the age of 18 and that the information you provide us is accurate,
            complete, and current at all times. Inaccurate, incomplete, or
            obsolete information may result in the immediate termination of your
            account on Service.
          </p>
          <br />
          <p>
            All accounts created in Earneasy24 remain as the sole property of
            Earneasy24, and its parent/sister concern company. Sharing account
            details, sharing captcha screenshots, connecting any bot, selling
            and reselling accounts, and selling awarded coupons is prohibited.
            Violation of this policy will result in account suspension and
            further action.
          </p>
          <br />
          <p>
            You are responsible for maintaining the confidentiality of your
            account and password, including but not limited to the restriction
            of access to your computer and/or account. You agree to accept
            responsibility for any and all activities or actions that occur
            under your account and/or password, whether your password is with
            our Service or a third-party service. You must notify us immediately
            upon becoming aware of any breach of security or unauthorized use of
            your account.
          </p>
          <br />
          <p>
            You may not use as a username the name of another person or entity
            or that is not lawfully available for use, a name or trademark that
            is subject to any rights of another person or entity other than you,
            without appropriate authorization. You may not use as a username any
            name that is offensive, vulgar, or obscene. We reserve the right to
            refuse service, terminate accounts, remove or edit content, or
            cancel orders at our sole discretion.
          </p>
          <br />
          <p>
            Non uses of account for more than 30 days shall lead to suspension
            of the account.
          </p>

          <br />

          <p>
            <strong className="text-24 font-cunia text-deepBlue">
              What is the use of Captcha?
            </strong>
          </p>

          <p>
            Captcha, which stands for "Completely Automated Public Turing test
            to tell Computers and Humans Apart," is a security measure used on
            websites to differentiate between human users and automated bots.
            Captchas are designed to prevent bots from accessing or interacting
            with a website's services or data. There are various types of
            captchas, but the most common one involves the user identifying and
            solving a challenge that is easy for humans but difficult for
            automated scripts to complete.
            <br />
            Here's how captchas work:
            <br />
            1. Presentation of the Captcha: When you visit a website, you may
            encounter a captcha challenge when trying to perform certain
            actions, such as submitting a form, signing up for an account, or
            making repeated requests to the server. The website will present a
            captcha challenge to verify that you are a human user.
            <br />
            2. Captcha Types: There are different types of captcha challenges.
            Some common ones include: a. Text-Based Captcha: Users are asked to
            type a series of distorted or scrambled letters and numbers from an
            image. b. Image Recognition: Users are required to identify and
            select specific objects in an image, such as traffic lights,
            crosswalks, or bicycles. c. Checkbox Captcha: Users simply need to
            check a box to confirm that they are not a robot. d. Audio Captcha:
            Users listen to an audio recording of distorted or garbled words and
            must type what they hear. e. ReCAPTCHA: Developed by Google,
            ReCAPTCHA is a widely used captcha service that combines various
            challenges, including image recognition and checkbox verification.
            <br />
            3. Solving the Captcha: As a human user, you need to solve the
            captcha challenge presented to you. This typically involves
            following the instructions provided, such as typing the characters
            you see in an image or clicking the required objects.
            <br />
            4. Validation: After you solve the captcha challenge, the website's
            server will validate your response. If you provide the correct
            solution, the server will allow you to proceed with the intended
            action on the website.
            <br />
            5. Verification for Bots: Bots and automated scripts often struggle
            to solve captchas because they are designed to recognize and
            understand human patterns. Captchas aim to introduce an element of
            unpredictability and human intuition that makes it difficult for
            automated programs to pass.
            <br />
            6. Continuous Improvement: Captcha systems are constantly evolving
            to stay ahead of advanced bots and to ensure a seamless experience
            for legitimate users. This includes improvements in the complexity
            of challenges, the use of machine learning to distinguish between
            humans and bots, and the introduction of newer, more secure captcha
            methods. In summary, captchas are an essential security measure to
            protect websites from automated bots and ensure that interactions on
            the internet are carried out by humans. By solving captcha
            challenges, you demonstrate that you are a real user, allowing you
            to access the website's content or services.
          </p>

          <p>
            We give a captcha typing work to users for practice purposes only,
            to teach them 'how to type correct captchas while registering or
            logging on to websites or anywhere. We use a captcha in our
            application Earneasy24 'as content' only, like other applications
            with different content. People use the application more, so we get
            good traffic on the application daily.
          </p>

          <br />

          <p>
            <strong className="text-24 font-cunia text-deepBlue">
              {" "}
              Acknowledgment
            </strong>
          </p>
          <br />
          <p>
            BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE
            THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY
            THEM.
          </p>

          <br />
          <p>
            Without informing the company if you keep your ID stopped for one
            month, or if you do not complete a minimum 1 dollar payment in a
            month then your ID will be suspended forever without any prior
            notice. One captcha word can be 6 to 12 digits (characters). And it
            will come in any type of font like … Upper / Lower case. Special
            characters etc... Example - (! @#$%^&*). Sometimes the server got a
            heavy load that’s why the captcha can be coming slow. After
            completing 5 $ of the work u have to send an email to us to take
            your payment. If you email us for a payment of more than 5 dollars
            then your payment will not process. Because the server does not keep
            a history of more than 5$. While solving online problems users must
            cooperate with the company. And when server maintenance is going on
            work can be stopped till getting resolved. After joining, we provide
            a support number & email id u must be contacted on them only. If u
            contact others apart from that then u will not get a response.
          </p>

          <br />
          <ol start="15">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Intellectual Property
              </strong>
            </li>
            <br />
          </ol>
          <p>
            Service and its original content (excluding Content provided by
            users), features, and functionality are and will remain the
            exclusive property of Earneasy24 and its licensors. Service is
            protected by copyright, trademark, and other laws of and foreign
            countries. Our trademarks may not be used in connection with any
            product or service without the prior written consent of Earneasy24.
          </p>
          <br />
          <ol start="16">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Copyright Policy
              </strong>
            </li>
            <br />
          </ol>
          <p>
            We respect the intellectual property rights of others. It is our
            policy to respond to any claim that Content posted on Service
            infringes on the copyright or other intellectual property rights
            (“Infringement”) of any person or entity. If you are a copyright
            owner or authorized on behalf of one, and you believe that the
            copyrighted work has been copied in a way that constitutes copyright
            infringement, please submit your claim via email to
            {websiteContent?.email}, with the subject line: “Copyright
            Infringement” and include in your claim a detailed description of
            the alleged Infringement. You may be held accountable for damages
            (including costs and attorneys’ fees) for misrepresentation or
            bad-faith claims on the infringement of any Content found on and/or
            through Service on your copyright.
          </p>
          <br />
          <ol start="17">
            <li>
              <strong className="text-20 font-cunia text-deepBlue">
                Indian Copyright Act 1957 Procedure for Copyright Infringement
                Claims
              </strong>
            </li>
            <br />
          </ol>
          <p>
            You may submit a notification pursuant to the Indian Copyright
            Act&nbsp; by providing our Copyright Agent with the following
            information in writing (see Indian Copyright Act 1957 for further
            detail):
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.1.</span> an electronic or
            physical signature of the person authorized to act on behalf of the
            owner of the copyright’s interest;
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.2.</span> a description of the
            copyrighted work that you claim has been infringed, including the
            URL (i.e., web page address) of the location where the copyrighted
            work exists or a copy of the copyrighted work;
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.3.</span> identification of the
            URL or other specific location on Service where the material that
            you claim is infringing is located;
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.4.</span> your address, telephone
            number, and email address;
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.5.</span> a statement by you that
            you have a good faith belief that the disputed use is not authorized
            by the copyright owner, its agent, or the law;
          </p>
          <br />
          <p>
            <span className="text-lightPink">0.6.</span> a statement by you,
            made under penalty of perjury, that the above information in your
            notice is accurate and that you are the copyright owner or
            authorized to act on the copyright owner’s behalf.&nbsp;You can
            contact our Copyright Agent via email at {websiteContent?.email}
          </p>
          <br />
          <ol start="18">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Error Reporting and Feedback
              </strong>
            </li>
            <br />
          </ol>
          <p>
            You may provide us either directly at {websiteContent?.email} or via
            third-party sites and tools with information and feedback concerning
            errors, suggestions for improvements, ideas, problems, complaints,
            and other matters related to our Service (“Feedback”). You
            acknowledge and agree that: (i) you shall not retain, acquire or
            assert any intellectual property right or another right, title, or
            interest in or to the Feedback; (ii) Company may have developed
            ideas similar to the Feedback; (iii) Feedback does not contain
            confidential information or proprietary information from you or any
            third party, and (iv) Company is not under any obligation of
            confidentiality with respect to the Feedback. In the event the
            transfer of the ownership to the Feedback is not possible due to
            applicable mandatory laws, you grant Company and its affiliates an
            exclusive, transferable, irrevocable, free-of-charge,
            sub-licensable, unlimited, and perpetual right to use (including
            copy, modify, create derivative works, publish, distribute and
            commercialize) Feedback in any manner and for any purpose.
          </p>
          <br />
          <ol start="19">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Links To Other Web Sites
              </strong>
            </li>
            <br />
          </ol>
          <p>
            Our Service may contain links to third-party websites or services
            that are not owned or controlled by Earneasy24 has no control over
            and assumes no responsibility for the content, privacy policies, or
            practices of any third-party websites or services. We do not warrant
            the offerings of any of these entities/individuals or their
            websites. For example, the outlined Terms of Use have been created
            using PolicyMaker.io, a free web application for generating
            high-quality legal documents. PolicyMaker’s Terms and Conditions
            generator is an easy-to-use free tool for creating an excellent
            standard Terms of Service template for a website, blog, e-commerce
            store, or app.
          </p>
          <br />
          <p>
            YOU ACKNOWLEDGE AND AGREE THAT COMPANY SHALL NOT BE RESPONSIBLE OR
            LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR
            ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON
            ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH
            THIRD-PARTY WEBSITES OR SERVICES. WE STRONGLY ADVISE YOU TO READ THE
            TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD-PARTY WEBSITES OR
            SERVICES THAT YOU VISIT.
          </p>
          <br />
          <ol start="20">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Disclaimer Of Warranty
              </strong>
            </li>
            <br />
          </ol>
          <p>
            THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS
            AVAILABLE” BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF
            ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES,
            OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU
            EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND
            ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
          </p>
          <br />
          <p>
            NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY
            WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS,
            SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE
            SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE
            ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES,
            THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE
            SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED,
            THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT
            MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS
            OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE
            SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
          </p>
          <br />
          <p>
            COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS
            OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO
            ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR
            PARTICULAR PURPOSE. THE FOREGOING DOES NOT AFFECT ANY WARRANTIES
            WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
          </p>
          <br />
          <ol start="21">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Limitation Of Liability
              </strong>
            </li>
            <br />
          </ol>
          <p>
            EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS,
            DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT,
            PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER, IT
            ARISES (INCLUDING ATTORNEYS’ FEES AND ALL RELATED COSTS AND EXPENSES
            OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY,
            WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN
            AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR
            ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING
            WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE,
            ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL,
            STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF
            COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH
            DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON
            THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE
            PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE
            CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE
            EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL
            DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
          </p>
          <br />
          <ol start="22">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Termination
              </strong>
            </li>
            <br />
          </ol>
          <p>
            We may terminate or suspend your account and bar access to Service
            immediately, without prior notice or liability, under our sole
            discretion, for any reason whatsoever and without limitation,
            including but not limited to a breach of Terms. If you wish to
            terminate your account, you may simply discontinue using Service.
            All provisions of Terms which by their nature should survive
            termination shall survive termination, including, without
            limitation, ownership provisions, warranty disclaimers, indemnity,
            and limitations of liability.
          </p>
          <br />
          <ol start="23">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Governing Law
              </strong>
            </li>
            <br />
          </ol>
          <p>
            These Terms shall be governed and construed in accordance with the
            laws of Maharastra, which governing law applies to an agreement
            without regard to its conflict of law provisions. Our failure to
            enforce any right or provision of these Terms will not be considered
            a waiver of those rights. If any provision of these Terms is held to
            be invalid or unenforceable by a court, the remaining provisions of
            these Terms will remain in effect. These Terms constitute the entire
            agreement between us regarding our Service and supersede and replace
            any prior agreements we might have had between us regarding Service.
          </p>
          <br />
          <ol start="24">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Changes To Service
              </strong>
            </li>
            <br />
          </ol>
          <p>
            We reserve the right to withdraw or amend our Service, and any
            service or material we provide via Service, in our sole discretion
            without notice. We will not be liable if for any reason all or any
            part of Service is unavailable at any time or for any period. From
            time to time, we may restrict access to some parts of the Service,
            or the entire Service, to users, including registered users.
          </p>
          <br />
          <ol start="25">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Amendments To Terms
              </strong>
            </li>
            <br />
          </ol>
          <p>
            We may amend the Terms at any time by posting the amended terms on
            this site. It is your responsibility to review these Terms
            periodically. Your continued use of the Platform following the
            posting of revised Terms means that you accept and agree to the
            changes. You are expected to check this page frequently so you are
            aware of any changes, as they are binding on you. By continuing to
            access or use our Service after any revisions become effective, you
            agree to be bound by the revised terms. If you do not agree to the
            new terms, you are no longer authorized to use Service.
          </p>
          <br />
          <ol start="26">
            <li>
              <strong className="text-24 font-cunia text-deepBlue">
                Waiver And Severability
              </strong>
            </li>
            <br />
          </ol>
          <p>
            No waiver by Company of any term or condition set forth in Terms
            shall be deemed a further or continuing waiver of such term or
            condition or a waiver of any other term or condition, and any
            failure of Company to assert a right or provision under Terms shall
            not constitute a waiver of such right or provision. If any provision
            of Terms is held by a court or other tribunal of competent
            jurisdiction to be invalid, illegal, or unenforceable for any
            reason, such provision shall be eliminated or limited to the minimum
            extent such that the remaining provisions of Terms will continue in
            full force and effect.
          </p>
          <br />
          <p>
            <strong className="text-24 font-cunia text-deepBlue">
              Disclosure&nbsp;
            </strong>
          </p>
          <br />
          <p>
            Earneasy24 will not disclose partners’ or service providers’
            identities to customers in any circumstance.
          </p>

          <br />
          <p>
            <strong className="text-24 font-cunia text-deepBlue">
              {" "}
              Contact Us
            </strong>
          </p>
          <br />
          <p>
            Please send your feedback, comments, requests for technical support
            by
          </p>
          <br />
          <p>
            <strong>
              email:{" "}
              <span className="text-lightPink">{websiteContent?.email}</span>
            </strong>
          </p>
          <br />
        </div>
      </div>

      {/* Footer*/}
      <Footer />
    </div>
  );
};

export default TermsConditions;
