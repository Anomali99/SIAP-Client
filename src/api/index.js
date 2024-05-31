const HitAPI = async (body, url, callback) => {
  try {
    let options = {
      method: body ? "POST" : "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    const result = await response.json();
    callback(result);
  } catch (error) {
    console.error(`Error fetching from ${url}:`, error);
    callback({ message: "Error during API call" });
  }
};

const AsatidzLogin = async (data, callback) => {
  const url = "http://127.0.0.1:5000/asatidz/login";
  const body = {
    telephone_number: data.phone,
    password: data.password,
  };
  await HitAPI(body, url, callback);
};

const AsatidzAdd = async (data, callback) => {
  const url = "http://127.0.0.1:5000/asatidz/add";
  const body = {
    name: data.name,
    gender: data.gender,
    entry_year: data.entry_year,
    telephone_number: data.telephone_number,
    password: data.password,
    is_active: data.is_active,
    year: data.year,
    job: data.job,
  };
  await HitAPI(body, url, callback);
};

const AsatidzGet = async (callback) => {
  const url = "http://127.0.0.1:5000/asatidz/get";
  await HitAPI(null, url, callback);
};

const SantriGet = async (callback) => {
  const url = "http://127.0.0.1:5000/santri/get";
  await HitAPI(null, url, callback);
};

const SantriAdd = async (data, callback) => {
  const url = "http://127.0.0.1:5000/santri/add";
  const body = {
    name: data.name,
    address: data.address,
    place_of_birth: data.place_of_birth,
    date_of_birth: data.date_of_birth,
    entry_year: data.entry_year,
    gender: data.gender,
    parent_name: data.parent_name,
    telephone_number: data.telephone_number,
    is_active: data.is_active,
  };
  await HitAPI(body, url, callback);
};

export { AsatidzLogin, AsatidzAdd, AsatidzGet, SantriAdd, SantriGet };
