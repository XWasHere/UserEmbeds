# Discord User Embeds

## Support.
At the time, UserEmbeds currently supports:

- Windows client.

## Injection (Windows)

Injecting the code is simple. You need to press `CTRL+SHIFT+I` on your keyboard. Have the content of `extend.js` copied to your clipboard.

Next you need to switch the console tab.

If this is your first time doing this since starting discord, press `CTRL+R` to refresh the page (It adds the user token to localStorage.)

If you're unsure if you need to do this or not. Assume you do.

Once you're sure that it's ready, Click on the context switcher in the console (it likely says `top`) you need to switch to `electronIsolatedContext`, this is where the script has access to the user token.

After you've switched contexts, you can paste the code into the console and press enter. It will add an embed button to your message bar (Amidst the other clutter).

Have fun!

## Warnings

Usage of this script is against the Discord TOS. I'm not liable for any punishments that may occur through the usage of my code.

Aditionally, you will likely be assumed to be a selfbot by people due to it being impossible to use rich embeds through the Discord Client.

**you have been warned**
