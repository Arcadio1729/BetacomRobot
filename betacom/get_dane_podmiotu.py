def get_dane_podmiotu(root_path,podmiot_data,postepowanie_data):
  f = open(root_path)

  root_data = json.load(f)

  root_obj = json.loads(root_data)
  podmiot_obj = json.loads(podmiot_data)
  postepowanie_obj = json.loads(postepowanie_data)

  df_root = pd.read_json(root_data)
  dict_podmiot = json.loads(podmiot_data)

  for item in postepowanie_obj:
    lst = [dict_podmiot["Nazwa"],dict_podmiot["Rejestr"],dict_podmiot["KRS"],dict_podmiot["NIP"],dict_podmiot["REGON"],dict_podmiot["Forma"],item["Postepowanie"],item["Sygnatura"],item["Rejestracja"],item["Zakonczenie"],item["Status"]]
    df_root.loc[len(df_root)]=lst

  df_root.to_json(root_path)