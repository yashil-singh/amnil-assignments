const BASE_URL = "https://dummyjson.com";

const promiseAllData = document.getElementById("promise-all-data");
const promiseAllLoader = document.getElementById("promise-all-loader");
const promiseAllError = document.getElementById("promise-all-error");

const promiseAllSettledData = document.getElementById(
  "promise-all-settled-data"
);
const promiseAllSettledLoader = document.getElementById(
  "promise-all-settled-loader"
);
const promiseAllSettledError = document.getElementById(
  "promise-all-settled-error"
);

const promiseAnyData = document.getElementById("promise-any-data");
const promiseAnyLoader = document.getElementById("promise-any-loader");
const promiseAnyError = document.getElementById("promise-any-error");

const promiseRaceData = document.getElementById("promise-race-data");
const promiseRaceLoader = document.getElementById("promise-race-loader");
const promiseRaceError = document.getElementById("promise-race-error");

const createPostCardDiv = () => {
  const card = document.createElement("div");
  card.classList =
    "p-4 border border-gray-200 shadow rounded-xl cursor-pointer max-w-lg mx-auto";
  return card;
};

const createPostCard = (
  title,
  body,
  tags,
  reactions,
  views,
  username,
  image
) => {
  const card = createPostCardDiv();

  card.innerHTML = `
              <span class="font-semibold text-ellipsis line-clamp-1">
                ${title}
              </span>

              <p
                class="text-sm text-gray-500 text-ellipsis line-clamp-5 text-justify"
              >
                ${body}
              </p>

              <ul class="flex gap-1 mt-2">
              ${tags
                .map(
                  (tag) =>
                    `<li>
                      <span
                        class="bg-cyan-700 text-white rounded-xl capitalize text-xs px-2 py-1"
                      >
                        ${tag}
                      </span>
                    </li>`
                )
                .join("")}
              </ul>

              <ul class="mt-2 flex items-center gap-2">
                <li class="flex items-center gap-1 text-gray-500">
                  <i data-lucide="thumbs-up" class="size-4"></i>
                  <span class="text-sm">${reactions.likes}</span>
                </li>

                <li class="flex items-center gap-1 text-gray-500">
                  <i data-lucide="thumbs-down" class="size-4"></i>
                  <span class="text-sm">${reactions.dislikes}</span>
                </li>

                <li class="flex items-center gap-1 text-gray-500">
                  <i data-lucide="eye" class="size-4"></i>
                  <span class="text-sm">${views}</span>
                </li>
              </ul>

              <div class="flex items-center gap-1 mt-2">
                <div
                  class="rounded-full overflow-hidden border border-gray-200"
                >
                  <img
                    src="${image}"
                    class="size-6 object-cover"
                  />
                </div>
                <span class="text-sm text-gray-500 font-semibold">@${username}</span>
              </div>`;

  return card;
};

const createPostData = (card, title, body, tags, reactions, views) => {
  card.innerHTML += `<span class="font-semibold text-ellipsis line-clamp-1">
                ${title}
              </span>

              <p
                class="text-sm text-gray-500 text-ellipsis line-clamp-5 text-justify"
              >
                ${body}
              </p>

              <ul class="flex gap-1 mt-2">
              ${tags
                .map(
                  (tag) =>
                    `<li>
                      <span
                        class="bg-cyan-700 text-white rounded-xl capitalize text-xs px-2 py-1"
                      >
                        ${tag}
                      </span>
                    </li>`
                )
                .join("")}
              </ul>

              <ul class="mt-2 flex items-center gap-2">
                <li class="flex items-center gap-1 text-gray-500">
                  <i data-lucide="thumbs-up" class="size-4"></i>
                  <span class="text-sm">${reactions.likes}</span>
                </li>

                <li class="flex items-center gap-1 text-gray-500">
                  <i data-lucide="thumbs-down" class="size-4"></i>
                  <span class="text-sm">${reactions.dislikes}</span>
                </li>

                <li class="flex items-center gap-1 text-gray-500">
                  <i data-lucide="eye" class="size-4"></i>
                  <span class="text-sm">${views}</span>
                </li>
              </ul>`;
};

const createAuthorData = (card, username, image) => {
  card.innerHTML += ` <div class="flex items-center gap-1 mt-2">
                <div
                  class="rounded-full overflow-hidden border border-gray-200"
                >
                  <img
                    src="${image}"
                    class="size-6 object-cover"
                  />
                </div>
                <span class="text-sm text-gray-500 font-semibold">@${username}</span>
              </div>`;
};

const fetchUsingAll = async () => {
  const userId = 1;
  const postId = 1;

  try {
    promiseAllLoader.classList.remove("hidden");
    promiseAllError.classList.add("hidden");

    const [userResponse, postResponse] = await Promise.all([
      fetch(`${BASE_URL}/users/${userId}`),
      fetch(`${BASE_URL}/posts/${postId}`),
    ]);

    const [user, post] = await Promise.all([
      userResponse.json(),
      postResponse.json(),
    ]);

    if (!userResponse.ok) {
      const error = user.message;
      throw new Error(error);
    }

    if (!postResponse.ok) {
      const error = post.message;
      throw new Error(error);
    }

    const { username, image } = user;
    const { title, body, tags, reactions, views } = post;

    const postCard = createPostCard(
      title,
      body,
      tags,
      reactions,
      views,
      username,
      image
    );

    promiseAllData.appendChild(postCard);
  } catch (error) {
    promiseAllError.classList.remove("hidden");
    promiseAllError.innerText = error.message;
  } finally {
    promiseAllLoader.classList.add("hidden");
  }
};

const fetchUsingAllSettled = async () => {
  const userId = 3;
  const postId = 3;

  try {
    promiseAllSettledLoader.classList.remove("hidden");
    promiseAllSettledError.classList.add("hidden");

    const [user, post] = await Promise.allSettled([
      // simulating error
      fetch(`${BASE_URL}/users/${userId}s`).then((res) => {
        if (!res.ok) {
          throw new Error("User not found");
        }
        return res.json();
      }),
      fetch(`${BASE_URL}/posts/${postId}`).then((res) => {
        if (!res.ok) {
          throw new Error("Post not found");
        }
        return res.json();
      }),
    ]);

    const card = createPostCardDiv();

    if (post.status === "fulfilled") {
      const { title, body, tags, reactions, views } = post.value;
      createPostData(card, title, body, tags, reactions, views);
    } else {
      card.innerHTML +=
        "<p class='text-red-500 text-center'>Error getting post data.</p>";
    }

    if (user.status === "fulfilled") {
      const { username, image } = user.value;
      createAuthorData(card, username, image);
    } else {
      card.innerHTML +=
        "<p class='text-red-500 text-center'>Error getting author data.</p>";
    }

    promiseAllSettledData.appendChild(card);

    lucide.createIcons();
  } catch (error) {
    promiseAllSettledError.classList.remove("hidden");
    promiseAllSettledError.innerText = error.message;
  } finally {
    promiseAllSettledLoader.classList.add("hidden");
  }
};

const fetchUsingAny = async () => {
  const postId1 = 3;
  const postId2 = 4;

  try {
    promiseAnyLoader.classList.remove("hidden");
    promiseAnyError.classList.add("hidden");

    const post = await Promise.any([
      fetch(`${BASE_URL}/posts/${postId1}`).then((res) => {
        if (!res.ok) {
          throw new Error("Post 1 not found");
        }
        return res.json();
      }),
      fetch(`${BASE_URL}/posts/${postId2}`).then((res) => {
        if (!res.ok) {
          throw new Error("Post 1 not found");
        }
        return res.json();
      }),
    ]);

    const card = createPostCardDiv();

    const { title, body, tags, reactions, views } = post;
    createPostData(card, title, body, tags, reactions, views);

    promiseAnyData.appendChild(card);

    lucide.createIcons();
  } catch (error) {
    promiseAnyError.classList.remove("hidden");
    promiseAnyError.innerText = error.message;
  } finally {
    promiseAnyLoader.classList.add("hidden");
  }
};

const fetchUsingRace = async () => {
  const postId1 = 5;
  const postId2 = 6;

  try {
    promiseRaceLoader.classList.remove("hidden");
    promiseRaceError.classList.add("hidden");

    const post = await Promise.race([
      fetch(`${BASE_URL}/posts/${postId1}s`)
        .then((res) =>
          res.ok ? res.json() : Promise.reject("Post 1 not found")
        )
        .catch((err) => err),

      fetch(`${BASE_URL}/posts/${postId2}`)
        .then((res) =>
          res.ok ? res.json() : Promise.reject("Post 2 not found")
        )
        .catch((err) => err),
    ]);
    console.log("🚀 ~ script.js:322 ~ post:", post);

    if (typeof post === "string") {
      throw new Error(post);
    }

    const card = createPostCardDiv();

    const { title, body, tags, reactions, views } = post;
    createPostData(card, title, body, tags, reactions, views);

    promiseRaceData.appendChild(card);

    lucide.createIcons();
  } catch (error) {
    promiseRaceError.classList.remove("hidden");
    promiseRaceError.innerText = error.message;
  } finally {
    promiseRaceLoader.classList.add("hidden");
  }
};

fetchUsingAll();
fetchUsingAllSettled();
fetchUsingAny();
fetchUsingRace();
