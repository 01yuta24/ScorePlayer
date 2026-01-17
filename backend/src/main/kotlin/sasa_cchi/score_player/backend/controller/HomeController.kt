package sasa_cchi.score_player.backend.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class HomeController{

    @GetMapping("/")
    fun getHomePage():String{
        println("HomeControllerが呼ばれました")
        return "index"
    }
}
