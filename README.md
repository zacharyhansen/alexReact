This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Bugs / Limitations

The one serious limitation is the ability to render video/yutube thumbnails. Depending on the complete list of supported types, I would add another component to show a thumbnail for these types of media.

In addition the date input will only cause a refetch if it is changed which is annoying if you are within the 'random' screen and want to go back to the current dates APOD. It is also awkward that the fetch only happens on close of the modal and there is no cancel.

I would handle this by adding a submit button to the modal in the future and removing the fetch on background click/close of the modal.

For styling, I did not focus too much on making things look pretty as this could go any number of directions but formatting the info screen would be a freat place to start.

## Future work

I would integrate the information of the image into each img render so that on hover you get the icon and clicking it gets you to the info screen. This would also be added to each photo on the random screen.

I could also allow for users to set the number of random photos they desire and be able to select one to full screen it.

The API also supports date ranges so this could be added to the search functionality.
