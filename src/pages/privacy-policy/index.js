import React from "react";
import { Typography, Grid } from "@mui/material";

const PrivacyPolicyPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Privacy Policy</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Effective Date: [Date]</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6">Introduction</Typography>
        <Typography>
          Welcome to [Your Website Name]! At [Your Company Name], we value your
          privacy and are committed to protecting your personal information.
          This Privacy Policy outlines how we collect, use, disclose, and
          protect your personal data when you access and use our website.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6">Information We Collect</Typography>
        <Typography>
          Personal Information: We may collect personal information such as your
          name, email address, and other contact details when you register for
          an account, subscribe to our newsletter, or contact us through our
          website.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography>
          Usage Data: We automatically collect certain information about your
          interactions with our website, including your IP address, browser
          type, device information, and pages visited. This data helps us
          analyze user behavior and improve our services.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6">
          Use of Cookies and Similar Technologies
        </Typography>
        <Typography>
          We use cookies and similar tracking technologies to enhance your
          browsing experience. Cookies are small files that store information on
          your device, and they help us recognize you when you return to our
          website. You have the option to disable cookies in your browser
          settings, but this may affect certain features of our website.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6">How We Use Your Information</Typography>
        <Typography>
          Provide and Improve Services: We use your personal information to
          provide you with our services and enhance your user experience.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography>
          Communication: We may use your contact details to send you updates,
          newsletters, or promotional offers, subject to your consent.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography>
          Analytics: We analyze usage data to understand user behavior and
          improve our website's performance and content.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6">Disclosure of Your Information</Typography>
        <Typography>
          We do not sell, trade, or rent your personal information to third
          parties. However, we may share your data with:
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography>
          Service Providers: We may engage third-party service providers to
          assist us in operating our website and services. These providers have
          limited access to your information and are obligated to maintain its
          confidentiality.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography>
          Legal Compliance: We may disclose your information to comply with
          legal obligations or respond to government requests.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6">Data Security</Typography>
        <Typography>
          We take reasonable measures to protect your personal information from
          unauthorized access, disclosure, or alteration. However, no data
          transmission over the internet is entirely secure, and we cannot
          guarantee the security of your data.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6">Your Rights</Typography>
        <Typography>
          You have the right to access, correct, or delete your personal
          information. If you wish to exercise these rights or have any concerns
          about your data, please contact us at [Your Contact Email].
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6">Changes to this Privacy Policy</Typography>
        <Typography>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the revised version will be effective as
          of the "Effective Date" above.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PrivacyPolicyPage;
