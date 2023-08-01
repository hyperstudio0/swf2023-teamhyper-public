//
//  ViewController.swift
//  ExVoIP
//
//  Created by Jake.K on 2022/02/07.
//

import UIKit
import CallKit
import Alamofire

struct Response: Codable {
    let blackListed: BlackListed
    let isWhiteListed: Bool
}

struct BlackListed: Codable {
    let identityType: Int
    let isBlackListed: Bool
    let reason: Int
}

class ViewController: UIViewController {
    let provider = CXProvider(configuration: CXProviderConfiguration())
    private let callController = CXCallController()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.view.backgroundColor = .white
        
        // 발신자 표시, 수신 차단 기능 활성화
        CXCallDirectoryManager.sharedInstance
            .reloadExtension(withIdentifier: "com.ExVoIP.CallDirectory") { error in
                print(error ?? "")
            }
        
        configureTextField();
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        // Show the keyboard when the view appears
        textfield.becomeFirstResponder()
    }
    
    
    @IBOutlet weak var textfield: UITextField!
    func configureTextField() {
        // Set background color to white
        textfield.backgroundColor = UIColor.white
        
        // Set border color to black
        textfield.layer.borderColor = UIColor.black.cgColor
        textfield.layer.borderWidth = 1.0
        textfield.layer.cornerRadius = 5.0 // Add corner radius for a nicer look (optional)
        
        // Set attributed placeholder text with black color
        let placeholderText = "휴대폰번호를 입력해주세요"
        let attributedPlaceholder = NSAttributedString(string: placeholderText, attributes: [NSAttributedString.Key.foregroundColor: UIColor.black])
        textfield.attributedPlaceholder = attributedPlaceholder
        
        // Set input text color to black
        textfield.textColor = UIColor.black
    }
    
    @IBAction func handleClickButton(_ sender: Any) {
        if let inputValue = textfield.text {
            print("Input Value: \(inputValue)")
            authNumber(mobile: inputValue);
        }
    }
    
    struct DecodableType: Decodable { let url: String }
    
    private func receiving(mobile: String, isWhiteListed: Bool, isBlackListed: Bool) {
        provider.setDelegate(self, queue: nil)
        
        // TODO: UUID값과 update값은 PushKit에서 넘어온(pushRegistry 메소드) 정보를 이용하여 사용
        // PushKit 포스팅 글 참고: https://ios-development.tistory.com/875
        let update = CXCallUpdate()
        update.remoteHandle = CXHandle(type: .generic, value: mobile)
        if(isWhiteListed) {
            update.localizedCallerName = "🟢 인증된 전화번호입니다. Tel.\(mobile)"
        } else if(isBlackListed) {
            update.localizedCallerName = "🔴 조심하세요! 보이스피싱이 의심되는 전화번호입니다.  Tel.\(mobile)"
        } else {
            update.localizedCallerName = "🟠 아직 확인되지 않은 전화번호입니다. Tel.\(mobile)"
        }
        
        provider.reportNewIncomingCall(with: UUID(), update: update) { error in
            print(error ?? "")
        }
    }
    
    private func authNumber(mobile: String) {
        let parameters: Parameters = [
            "value": mobile
        ]
        let headers: HTTPHeaders = [
            "Accept": "application/json"
        ]
        
        AF.request("https://api.teamhyper.hyperplay.co/api/v1/smart-contract/auth", method: .post, parameters: parameters, headers: headers).validate().responseDecodable(of: Response.self) { [self] response in
            switch response.result {
            case .success(let value):
                print(value)
                receiving(mobile: mobile, isWhiteListed: value.isWhiteListed, isBlackListed: (value.blackListed.isBlackListed));
            case .failure(let error):
                print("oops")
                print(error)
            }
        }.cURLDescription { description in
            print(description)
        }
        
    }
    
    // 전화 받기
    private func receiving3582() {
        authNumber(mobile: "01041533582");
    }
    
    private func receiving0257() {
        authNumber(mobile: "01057370257");
    }
    
    // 전화 하기
    private func outgoing() {
        authNumber(mobile: "01012341234");
        //        let uuid = UUID()
        //        let handle = CXHandle(type: .emailAddress, value: "palatable77@gmail.com")
        //
        //        let startCallAction = CXStartCallAction(call: uuid, handle: handle)
        //        let transaction = CXTransaction(action: startCallAction)
        //        self.callController.request(transaction) { error in
        //            print(error ?? "")
        //        }
    }
}

extension ViewController: CXProviderDelegate {
    func providerDidReset(_ provider: CXProvider) {
    }
    
    func provider(_ provider: CXProvider, perform action: CXEndCallAction) {
        action.fulfill()
    }
    
    // 전화 받기 델리게이트 메소드
    func provider(_ provider: CXProvider, perform action: CXAnswerCallAction) {
        action.fulfill()
    }
    
    // 전화 걸기 델리게이트 메소드
    func provider(_ provider: CXProvider, perform action: CXStartCallAction) {
        action.fulfill()
    }
}
