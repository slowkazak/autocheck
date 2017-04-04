import _ from "lodash";
import {Headers, URLSearchParams} from "@angular/http";

export class ApiBase {
  public readonly api_base: string = "http://api.auto.ria.com";

  constructor() {
  }

  /**
   *  добавляет создает массив заголовков или параметров запроса
   * @param data_list - массив с данными, Array<{ title: string, value: string }>
   * @param isheaders - true - создать headers, false - создать Urlsearch
   * @returns {null, Headers, UrlsearchParams}
   * @constructor
   */
  public SetQueryData(data_list: Array<{ title: string, value: string }>, isheaders: boolean = false): Headers
    | URLSearchParams
    | null {
    let result = null;
    try {
        //если не пуст массив данных
      !_.isEmpty(data_list) ?
        // если isheaders - будем создавать хедеры для запроса, если нет - параметры хапроса
        (isheaders ? result = new Headers() : result = new URLSearchParams(),
        //перебирается массив запросов и элементы добавляются к созданному объекту Headers или URLSearchParams
            _.forEach(data_list,
              (item: any) => {
                result.append(item.title, item.value)
              }
            )
        ) : false
    }
    catch (err) {
      console.error("Ошибка при добавлении данных", err)
    }
    return result;
  }

  /**
   * Возвращает адрес api
   */
  public GetApiBase(): string | null {
    return this.api_base || null
  }
  public SuccessCallback(data) {
    return data.json();
  }
  public ErrCallback(err) {
    console.error("Ошибка при выполнении запроса",err);
  }


}
