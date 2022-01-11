Live: [https://htmlpreview.github.io/?https://github.com/js-tasks-ru/htmlcss-20211125_dan-ignatov/blob/master/04-lection2/01-histogram/index.html](https://htmlpreview.github.io/?https://github.com/js-tasks-ru/htmlcss-20211125_dan-ignatov/blob/master/04-lection2/01-histogram/index.html)

Preview 1:

![image](https://user-images.githubusercontent.com/2094015/148932600-bc91f28b-5014-4ecd-9344-8cc238de39cf.png)

Preview 2:

![image](https://user-images.githubusercontent.com/2094015/148927159-b05bad98-54d9-4820-b0de-16c6cdab24cb.png)

On the preview images, you can found visual 'mistakes': 2px (or even 3px) spacing between bars instead of 1px.
These 'mistakes' occurs because browser calculates coordinates as 'float' and only the resulting value will be rounded up before the painting.

Also, there can be OS scaling that do the same thing to meet scaled values with pixels of the target device.
In my environment, there are 125% of OS scaling and 125% of browser scaling at once.

So, even with 100% of OS scaling and 100% of browser scaling there will be few 2px gaps between bars because of rounding floating numbers to '1' or to '2'.

Links:

- [Inside look at modern web browser (part 1)](https://developers.google.com/web/updates/2018/09/inside-browser-part1)
- [Inside look at modern web browser (part 2)](https://developers.google.com/web/updates/2018/09/inside-browser-part2)
- [Inside look at modern web browser (part 3)](https://developers.google.com/web/updates/2018/09/inside-browser-part3)
- [Inside look at modern web browser (part 4)](https://developers.google.com/web/updates/2018/09/inside-browser-part4)
- [Никто не знает, как работает каскад](https://habr.com/ru/company/htmlacademy/blog/590779/)