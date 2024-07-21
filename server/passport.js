// passport.js
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const guserdb = require("./models/googleUser");

const { 
    GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,
    GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET,
    FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET 
} = process.env;

passport.use(
    new GitHubStrategy({
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback",
        scope: ["user:email"]
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            let userEmail = profile.emails?.[0]?.value;
            let userImage = profile.photos?.[0]?.value;

            let user = await guserdb.findOne({ githubId: profile.id });

            if (!user) {
                user = new guserdb({
                    githubId: profile.id,
                    displayName: profile.displayName,
                    email: userEmail,
                    image: userImage
                });

                await user.save();
            }

            return done(null, user);
        } catch (error) {
            return done(error, null);
        }
    }
));

passport.use(
    new OAuth2Strategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"]
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            let user = await guserdb.findOne({ googleId: profile.id });

            if (!user) {
                user = new guserdb({
                    googleId: profile.id,
                    displayName: profile.displayName,
                    email: profile.emails[0].value,
                    image: profile.photos[0].value
                });

                await user.save();
            }

            return done(null, user);
        } catch (error) {
            return done(error, null);
        }
    }
));

passport.use(
    new FacebookStrategy({
        clientID: FACEBOOK_CLIENT_ID,
        clientSecret: FACEBOOK_CLIENT_SECRET,
        callbackURL: "/auth/facebook/callback",
        scope: ["public_profile", "email"]
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            let user = await guserdb.findOne({ facebookId: profile.id });

            if (!user) {
                user = new guserdb({
                    facebookId: profile.id,
                    displayName: profile.displayName,
                    email: profile.emails[0].value,
                    image: profile.photos[0].value
                });

                await user.save();
            }

            return done(null, user);
        } catch (error) {
            return done(error, null);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = passport;
