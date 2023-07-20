import React from "react";
import { Typography, Grid } from "@mui/material";
import Link from "next/link";
import classes from "./listStyle.module.css";

const KycPolicyPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">
          KYC Policy of Nexus International Entertainment N.V.
        </Typography>
        <Typography>
          When a user makes an aggregate lifetime total of deposits exceeding
          EUR 2000 or requests a withdrawal of any amount inside the{" "}
          <Link href={"/"}>www.betpool.com</Link> platform, then it is
          compulsory for them to perform a full KYC process.
        </Typography>
        <Typography>
          During this process, the user will have to input some basic details
          about themselves and then upload
        </Typography>
        <ul className={classes.numbered_list}>
          <li>
            A copy of Government Issued Photo ID (in some cases front and back
            depending on the doc)
          </li>
          <li>A selfie of themselves holding the ID doc</li>
          <li>A bank statement/Utility Bill</li>
        </ul>
      </Grid>

      <Grid item xs={12}>
        <Typography>
          Once uploaded, the user will get a “Temporarily Approved” Status and
          the documents will now be on our side, and the “KYC Team” will have
          24hrs to go over them and email the user about the outcome:
        </Typography>
        <ul class={classes.dashed_list}>
          <li>Approval</li>
          <li>Rejection</li>
          <li>More information needed – No change in Status</li>
        </ul>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          When the user is on “Temporarily Approved” Status then:
        </Typography>
        <ul class={classes.dashed_list}>
          <li>They can use the platform normally</li>
          <li>They cannot deposit more than EUR 500 in aggregate total</li>
          <li>They cannot complete any withdrawal.</li>
        </ul>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" sx={{ color: "#2f5496" }}>
          Guideline for the “KYC Process”
        </Typography>

        <ul className={classes.numeric_list}>
          <li>
            Proof of ID
            <ul class={classes.alphabetical_list}>
              <li>Signature Is there</li>
              <li>
                Country is not a Restricted Country: United States of America
                and its territories, France and its territories, Netherlands and
                its territories and countries that form the Kingdom of
                Netherlands including Bonaire, Sint Eustatius, Saba, Aruba,
                Curacao and Sint Maarten, Australia and its territories,
                Austria, Germany, United Kingdom of Great Britain, Northern
                Ireland, Spain.
              </li>
              <li>Full Name matches client’s name</li>
              <li>Document does not expire in the next 3 months</li>
              <li>Owner is over 18 years of age</li>
            </ul>
          </li>
          <li>
            Proof of Residence
            <ul class={classes.alphabetical_list}>
              <li>Bank Statement or Utility Bill</li>
              <li>
                Country is not a Restricted Country: United States of America
                and its territories, France and its territories, Netherlands and
                its territories and countries that form the Kingdom of
                Netherlands including Bonaire, Sint Eustatius, Saba, Aruba,
                Curacao and Sint Maarten, Australia and its territories,
                Austria, United Kingdom of Great Britain, Northern Ireland,
                Germany, Spain, and Cyprus.
              </li>
              <li>
                Full Name matches client’s name and is same as in proof of ID.
              </li>
              <li>Date of Issue: In the last 3 months</li>
            </ul>
          </li>
          <li>
            Selfie with ID
            <ul class={classes.alphabetical_list}>
              <li>Holder is the same as in the ID document above</li>
              <li>
                ID document is the same as in “1”. Make sure photo/ID number is
                the same
              </li>
            </ul>
          </li>
        </ul>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" sx={{ color: "#2f5496" }}>
          Notes on the “KYC Process”
        </Typography>
        <ul class={classes.numbered_list}>
          <li>
            When the KYC process is unsuccessful then the reason is documented
            and a support ticket is created in the system. The ticket number
            along with an explanation is communicated back to the user.
          </li>
          <li>
            Once all proper documents are in our possession then the account
            gets approved.
          </li>
        </ul>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" sx={{ color: "#2f5496" }}>
          “Other AML measures”
        </Typography>
        <ul class={classes.numeric_list}>
          <li>
            If a user has not passed full KYC then they cannot make additional
            deposits or withdrawals of any amount.
          </li>
          <li>
            If a user has passed the KYC process successfully then
            <ul className={classes.alphabetical_list}>
              <li>There is a deposit limit per transaction (max EUR 2,000)</li>
              <li>
                Prior to any withdrawal there is a detailed algorithmic and
                manual check on the activity and balance of the user to see if
                the amount withdrawn is a result of proper activity in the
                platform.
              </li>
            </ul>
          </li>
          <li>
            Under no circumstances may a user transfer funds directly to another
            user.
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default KycPolicyPage;
