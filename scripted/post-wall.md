# Post Wall Project

Today you'll be adding a page to your profile where other people can
post comments on your site, kind of like a Facebook wall! You can see
an example [here](bbarg.github.io/post-wall.html).

## Get your workspace set up

You're going to copy over a few files to your profile project to get
started.

- Create a new file called `post_wall.html` and copy
  [this html code](https://raw.githubusercontent.com/hollyhudson/jquery-practice/master/post_wall.html)
  into it.
- Create `post_wall.css` and copy
  [this css file](https://raw.githubusercontent.com/hollyhudson/jquery-practice/master/post_wall.css)
  into it.
- Create a file called `post_wall.js`. This is where we'll be doing
  most of our work.
  
*NOTE*: If you are putting `.css` or `.js` files in a different folder
than your html files, make sure you update the links in
`post_wall.html`. Right now they assume that the `.css` and `.html`
files are all in the same folder.

You'll also notice that the jQuery CDN is already linked.

## `click` handler

On our wall, the user types some text, then clicks a button. After
they click, they'll see their post on the page. Therefore:

- we need a click handler for the `submit` button

## Reading user input from `<textarea>` 

`<textarea>` is an HTML5 tag that is used as a box for people to type
in. Look it up! You'll notice we have a `<textarea>` tag

When the user clicks, we're going to need to do *something* with the
text that the user has entered in the box.

- in the click handler, get the value from the `<textarea>` box

To confirm it's working, try `console.log`-ing the value you just
got (you can view the console in Chrome by typing `Ctrl-Option-J`).

## Writing the text to the wall

We have a `<div>` tag with `id='wall'` in `post_wall.js` that serves
as a container for all the posts people are going submit. Somehow, we
have to add the input we just got from the user to this `<div>`.

There are plenty of jQuery functions that allow us to modify the html
inside a `div`.

- find and use a jQuery function that adds its argument as **the first element
  in the selected tag**

i.e.
```js
$(selector).addThisThingAtTheBeginning('some html code');
```

## Make your post format prettier

Right now we're just writing basic strings, and it's pretty hard to
read the user's posts. Also, we don't know who they are.

- Format your post so there's a profile image next to the user's
  input. You can use a placeholder image for now.
- Make it so each post is clearly separate from the posts above and
  below it (as opposed to the posts being side-by-side).

## Further ideas

- Prompt your poster for their name and display that under their post.
